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
import { BeveragesComponent } from './components/beverages/beverages.component';
import { DivingComponent } from './components/diving/diving.component';
import { SportsComponent } from './components/sports/sports.component';
import { FoodTripComponent } from './components/food-trip/food-trip.component';
import { DiningTripComponent } from './components/dining-trip/dining-trip.component';
import { HistoricalTripComponent } from './components/historical-trip/historical-trip.component';
import { NaturalWondersComponent } from './components/natural-wonders/natural-wonders.component';
import { HikingTripComponent } from './components/hiking-trip/hiking-trip.component';
import { NightlifeComponent } from './components/nightlife/nightlife.component';
import { LocalTraditionsComponent } from './components/local-traditions/local-traditions.component';
import { VolcanoComponent } from './components/volcano/volcano.component';
import { AnythingElseComponent } from './components/anything-else/anything-else.component';
import { SpaComponent } from './components/spa/spa.component';
import { SurfingComponent } from './components/surfing/surfing.component';
import { HistoryComponent } from './components/history/history.component';

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
    MuseumsComponent,
    BeveragesComponent,
    DivingComponent,
    SportsComponent,
    FoodTripComponent,
    DiningTripComponent,
    HistoricalTripComponent,
    NaturalWondersComponent,
    HikingTripComponent,
    NightlifeComponent,
    LocalTraditionsComponent,
    VolcanoComponent,
    AnythingElseComponent,
    SpaComponent,
    SurfingComponent,
    HistoryComponent
  ],
  imports: [CommonModule, TripRequestRoutingModule, SharedModule]
})
export class TripRequestModule {}
