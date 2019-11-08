import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestQuestionsComponent } from './request-questions/request-questions.component';
import { RequestMainComponent } from './request-main/request-main.component';
import { TripRequestRoutingModule } from './trip-request.routing.module';
import { SharedModule } from '../shared/shared.module';
import { DatePlannedComponent } from './components/date-planned/date-planned.component';
import { WhoTravelComponent } from './components/who-travel/who-travel.component';
import { PurposeTripComponent } from './components/purpose-trip/purpose-trip.component';
import { HotelTypeComponent } from './components/hotel-type/hotel-type.component';
import { DatesTripComponent } from './components/dates-trip/dates-trip.component';
import { TripDestinationComponent } from './components/trip-destination/trip-destination.component';
import { EstimateDateComponent } from './components/estimate-date/estimate-date.component';
import { TripActivitiesComponent } from './components/trip-activities/trip-activities.component';
import { MuseumsComponent } from './components/museums/museums.component';

@NgModule({
  declarations: [
    RequestQuestionsComponent,
    RequestMainComponent,
    DatePlannedComponent,
    WhoTravelComponent,
    PurposeTripComponent,
    HotelTypeComponent,
    DatesTripComponent,
    TripDestinationComponent,
    EstimateDateComponent,
    TripActivitiesComponent,
    MuseumsComponent
  ],
  imports: [CommonModule, TripRequestRoutingModule, SharedModule]
})
export class TripRequestModule {}
