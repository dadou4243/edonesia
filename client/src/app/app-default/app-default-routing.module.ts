import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { TripsComponent } from './components/trips/trips.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { WishlistHomeComponent } from './wishlist/wishlist-home/wishlist-home.component';
import { BookTripComponent } from './components/booking/book-trip/book-trip.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AppDefaultComponent } from './app-default.component';

// import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {
    path: '',
    component: AppDefaultComponent,
    children: [
      {
        path: '',
        component: HomeMainComponent
      },
      { path: 'trips', component: TripsComponent },
      { path: 'trips/:id', component: ActivityDetailsComponent },
      { path: 'activities/:id', component: ActivityDetailsComponent },
      { path: 'wishlist', component: WishlistHomeComponent },
      { path: 'book', component: BookTripComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent }
    ]
  }

  // { path: 'search/:string', component: SearchResultsComponent },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
  // { path: '**', component: 'NotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppDefaultRoutingModule {}
