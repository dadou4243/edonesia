import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestQuestionsComponent } from './request-questions/request-questions.component';
import { RequestMainComponent } from './request-main/request-main.component';
import { TripRequestRoutingModule } from './trip-request.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RequestQuestionsComponent, RequestMainComponent],
  imports: [CommonModule, TripRequestRoutingModule, SharedModule]
})
export class TripRequestModule {}
