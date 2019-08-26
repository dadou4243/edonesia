import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './layout/header/header.component';
import { AddTripComponent } from './trips/add-trip/add-trip.component';
import { EditTripComponent } from './trips/edit-trip/edit-trip.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AnalyticsHomeComponent } from './analytics/analytics-home/analytics-home.component';
import { PurchasesListComponent } from './purchases/purchases-list/purchases-list.component';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';
import { TripsListComponent } from './trips/trips-list/trips-list.component';
import { BookingsComponent } from './bookings/bookings.component';
import { TripMainComponent } from './trips/trip-main/trip-main.component';
import { TripItemComponent } from './trips/trip-item/trip-item.component';
import { BookingsListComponent } from './bookings/bookings-list/bookings-list.component';
import { BookingItemComponent } from './bookings/booking-item/booking.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    AddTripComponent,
    EditTripComponent,
    UsersListComponent,
    AnalyticsHomeComponent,
    PurchasesListComponent,
    RequestsListComponent,
    TripsListComponent,
    BookingsComponent,
    BookingItemComponent,
    TripMainComponent,
    TripItemComponent,
    BookingsListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule {}
