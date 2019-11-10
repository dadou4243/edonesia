import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookingsService } from 'src/app/core/services/bookings.service';
import { Store, select } from '@ngrx/store';
import {
  RequestState,
  SetCurrentIndex,
  getCurrentStepIndex,
  getCurrentActivitiesStepIndex,
  getFormValue,
  SetFormValue,
  getCurrentValidationErrors,
  SetActivitiesCurrentIndex,
  getActivitiesWithoutEmptyOnes
} from 'src/app/store/request';
import { steps } from '../data/data';

@Component({
  selector: 'app-request-questions',
  templateUrl: './request-questions.component.html',
  styleUrls: ['./request-questions.component.scss']
})
export class RequestQuestionsComponent implements OnInit {
  datePlanned = true;
  requestForm: FormGroup;
  currentStepIndex: number;
  currentActivitiesStepIndex: number;
  formValue: any;
  stepsNumber = steps;
  errors: any[];
  showErrors = false;
  activitiesWithoutEmpty;

  constructor(
    private fb: FormBuilder,
    private bookingsService: BookingsService,
    private store: Store<RequestState>
  ) {
    this.store.pipe(select(getCurrentStepIndex)).subscribe(index => {
      this.currentStepIndex = index;
    });
    this.store.pipe(select(getCurrentActivitiesStepIndex)).subscribe(index => {
      this.currentActivitiesStepIndex = index;
    });
    this.store.pipe(select(getCurrentValidationErrors)).subscribe(err => {
      this.errors = err;
      if (this.errors.length === 0) {
        this.showErrors = false;
      }
    });
    this.store.pipe(select(getFormValue)).subscribe(formValue => {
      // console.log('formValue:', formValue);
      this.formValue = formValue;
    });
    this.store
      .pipe(select(getActivitiesWithoutEmptyOnes))
      .subscribe(activitiesWithoutEmpty => {
        console.log('activitiesWithoutEmpty:', activitiesWithoutEmpty);
        this.activitiesWithoutEmpty = activitiesWithoutEmpty;
      });
  }

  ngOnInit() {
    this.requestForm = this.fb.group({
      firstName: ['', [Validators.required]]
    });
  }

  onClickNext() {
    console.log('CLICK NEXT');
    console.log('this.errors', this.errors);

    // TODO: Refactor the conditions
    // Check if step valid
    if (this.errors.length === 0) {
      this.showErrors = false;

      // If current step is activities
      if (
        this.currentStepIndex === this.stepsNumber.tripActivities &&
        this.currentActivitiesStepIndex < this.activitiesWithoutEmpty.length - 1
      ) {
        // If next step is activity without page
        // if (
        //   this.activitiesWithoutPage.includes(
        //     this.formValue.activities[this.currentActivitiesStepIndex + 1]
        //   )
        // ) {
        //   // If cruises is last in activities array, go to next activityStep
        //   if (
        //     this.currentActivitiesStepIndex + 2 ===
        //     this.formValue.activities.length
        //   ) {
        //     this.store.dispatch(
        //       SetCurrentIndex({ currentStepIndex: this.currentStepIndex + 1 })
        //     );
        //     // If cruises is not last in activities array, skip one activity
        //   } else {
        //     this.store.dispatch(
        //       SetActivitiesCurrentIndex({
        //         currentActivitiesStepIndex: this.currentActivitiesStepIndex + 2
        //       })
        //     );
        //   }

        //   return;
        //   // If not in cruises step, increment activityStep
        // } else {
        this.store.dispatch(
          SetActivitiesCurrentIndex({
            currentActivitiesStepIndex: this.currentActivitiesStepIndex + 1
          })
        );
        return;
        // }
      }

      // If not in activity step, increment step
      this.store.dispatch(
        SetCurrentIndex({ currentStepIndex: this.currentStepIndex + 1 })
      );
    } else {
      this.showErrors = true;
    }
  }

  onClickPrevious() {
    console.log('on Click Previous');
    this.showErrors = false;

    // If current step is activities and current activity step index is not -1
    if (
      this.currentStepIndex === this.stepsNumber.tripActivities &&
      this.currentActivitiesStepIndex > -1
    ) {
      // If previous activity step is activity without page, skip one activityStep
      // if (
      //   this.activitiesWithoutPage.includes(
      //     this.formValue.activities[this.currentActivitiesStepIndex - 1]
      //   )
      // ) {
      //   this.store.dispatch(
      //     SetActivitiesCurrentIndex({
      //       currentActivitiesStepIndex: this.currentActivitiesStepIndex - 2
      //     })
      //   );
      //   // If previous activity step is not an activity without page, decrement activityStep
      // } else {
      //   this.store.dispatch(
      //     SetActivitiesCurrentIndex({
      //       currentActivitiesStepIndex: this.currentActivitiesStepIndex - 1
      //     })
      //   );
      // }
      // return;
      // If current step is the one after all activities, go back to last activity
      // } else if (this.currentStepIndex === this.stepsNumber.tripActivities + 1) {
      // If last activity is an activity without page, decrement step and decrement activityStep
      // if (
      //   this.formValue.activities.length === 0 ||
      //   this.activitiesWithoutPage.includes(
      //     this.formValue.activities[this.currentActivitiesStepIndex + 1]
      //   )
      // ) {
      this.store.dispatch(
        SetActivitiesCurrentIndex({
          currentActivitiesStepIndex: this.currentActivitiesStepIndex - 1
        })
      );
      //   return;
      // } else {
      // this.store.dispatch(
      //   SetActivitiesCurrentIndex({
      //     currentActivitiesStepIndex: this.formValue.activities.length - 1
      //   })
      // );
      // }
      // If current step is not a subActivities page
    } else {
      this.store.dispatch(
        SetCurrentIndex({ currentStepIndex: this.currentStepIndex - 1 })
      );
    }
  }

  onUpdateStepValues(value) {
    // console.log('value:', value);

    this.store.dispatch(
      SetFormValue({
        stepValues: value.stepValues,
        validationErrors: value.validationErrors
      })
    );
    // this.onClickNext();
  }

  submitRequest() {
    this.bookingsService.addBooking(this.requestForm.value).subscribe(res => {
      console.log('res', res);
    });
  }
}
