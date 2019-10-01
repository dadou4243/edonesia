import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { TripsService } from 'src/app/core/services/trips.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  tripId;
  tripDetails$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private tripsSevice: TripsService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => (this.tripId = params.get('id')))
    );
    this.route.paramMap.subscribe(params => {
      console.log('res:', params);
      this.tripId = params.get('id');

      this.tripDetails$ = this.tripsSevice.getTrip(this.tripId);
    });
  }
}
