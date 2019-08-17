import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AddTripComponent } from './trips/add-trip/add-trip.component';
import { EditTripComponent } from './trips/edit-trip/edit-trip.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AnalyticsHomeComponent } from './analytics/analytics-home/analytics-home.component';
import { PurchasesListComponent } from './purchases/purchases-list/purchases-list.component';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTripComponent,
    EditTripComponent,
    UsersListComponent,
    AnalyticsHomeComponent,
    PurchasesListComponent,
    RequestsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
