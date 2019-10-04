import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestQuestionsComponent } from './request-questions/request-questions.component';
import { RequestMainComponent } from './request-main/request-main.component';
import { TripRequestRoutingModule } from './trip-request.routing.module';
import { SharedModule } from '../shared/shared.module';
import { StripePaymentComponent } from '../components/stripe-payment/stripe-payment.component';

@NgModule({
  declarations: [
    RequestQuestionsComponent,
    RequestMainComponent,
    StripePaymentComponent
  ],
  imports: [CommonModule, TripRequestRoutingModule, SharedModule]
})
export class TripRequestModule {}
