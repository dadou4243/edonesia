import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './components/trips/trips.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { WishlistHomeComponent } from './wishlist/wishlist-home/wishlist-home.component';

const routes: Routes = [
  { path: '', component: HomeMainComponent },

  { path: 'trips', component: TripsComponent },
  { path: 'trips/:id', component: ActivityDetailsComponent },
  { path: 'activities/:id', component: ActivityDetailsComponent },
  { path: 'wishlist', component: WishlistHomeComponent }
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
