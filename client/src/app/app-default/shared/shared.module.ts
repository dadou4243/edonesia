import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookTripComponent } from './book-trip/book-trip.component';
import { StripePaymentComponent } from './stripe-payment/stripe-payment.component';

@NgModule({
  declarations: [BookTripComponent, StripePaymentComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StripePaymentComponent
  ]
})
export class SharedModule {}
