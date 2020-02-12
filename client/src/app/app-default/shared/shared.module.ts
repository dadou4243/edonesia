import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

import { BookTripComponent } from './components/book-trip/book-trip.component';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { ChoiceCardComponent } from './components/choice-card/choice-card.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { SelectOptionComponent } from './components/select-option/select-option.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PackageComponent } from './components/packages/package/package.component';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';


@NgModule({
    declarations: [
        BookTripComponent,
        StripePaymentComponent,
        ChoiceCardComponent,
        MultipleChoiceComponent,
        SelectOptionComponent,
        PackagesComponent,
        PackageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng5SliderModule,
        InternationalPhoneNumberModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng5SliderModule,
        StripePaymentComponent,
        ChoiceCardComponent,
        MultipleChoiceComponent,
        SelectOptionComponent,
        PackagesComponent,
        PackageComponent,
        InternationalPhoneNumberModule
    ]
})
export class SharedModule {
}
