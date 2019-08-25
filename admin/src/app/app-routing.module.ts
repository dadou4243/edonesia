import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsListComponent } from './trips/trips-list/trips-list.component';
import { BookingsComponent } from './bookings/bookings.component';
import { TripMainComponent } from './trips/trip-main/trip-main.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: 'trips', component: TripMainComponent },
  // { path: 'trips/:id', component: ActivityDetailsComponent },
  // { path: 'activities/:id', component: ActivityDetailsComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: '', redirectTo: '/trips', pathMatch: 'full' }
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
