import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookTripComponent } from './components/book-trip/book-trip.component';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { ChoiceCardComponent } from './components/choice-card/choice-card.component';

@NgModule({
  declarations: [
    BookTripComponent,
    StripePaymentComponent,
    ChoiceCardComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StripePaymentComponent,
    ChoiceCardComponent
  ]
})
export class SharedModule {}
