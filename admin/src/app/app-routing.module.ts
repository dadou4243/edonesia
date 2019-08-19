import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsListComponent } from './trips/trips-list/trips-list.component';
import { BookingsComponent } from './bookings/bookings.component';
import { TripMainComponent } from './trips/trip-main/trip-main.component';

const routes: Routes = [
  { path: '', component: TripsListComponent },

  { path: 'trips', component: TripMainComponent },
  // { path: 'trips/:id', component: ActivityDetailsComponent },
  // { path: 'activities/:id', component: ActivityDetailsComponent },
  { path: 'bookings', component: BookingsComponent }
  // { path: 'signup', component: SignUpComponent },
  // { path: 'search/:string', component: SearchResultsComponent },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
  // { path: '**', component: 'NotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
