import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsListComponent } from './trips/trips-list/trips-list.component';

const routes: Routes = [
  { path: '', component: TripsListComponent },

  { path: 'trips', component: TripsListComponent }
  // { path: 'trips/:id', component: ActivityDetailsComponent },
  // { path: 'activities/:id', component: ActivityDetailsComponent },
  // { path: 'wishlist', component: WishlistHomeComponent }
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
