import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestQuestionsComponent } from './request-questions/request-questions.component';
import { RequestMainComponent } from './request-main/request-main.component';

const routes: Routes = [
  {
    path: '',
    component: RequestMainComponent,
    children: [
      {
        path: '',
        component: RequestQuestionsComponent
      }

      //   { path: 'trips', component: TripsComponent },
      //   { path: 'trips/:id', component: TripDetailsComponent },
      //   { path: 'activities/:id', component: TripDetailsComponent },
      //   { path: 'wishlist', component: WishlistHomeComponent },
      //   { path: 'book', component: BookTripComponent },
      //   { path: 'login', component: LoginComponent },
      //   { path: 'signup', component: SignUpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRequestRoutingModule {}
