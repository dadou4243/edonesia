import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { TripsComponent } from './components/trips/trips.component';
import { TripComponent } from './components/trip/trip.component';
import { SearchComponent } from './search/search/search.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { MainActivitiesComponent } from './home/main-activities/main-activities.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { PopularActivitiesComponent } from './components/popular-activities/popular-activities.component';
import { ActivitySuggestionsComponent } from './components/activity-suggestions/activity-suggestions.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { RelatedItemsComponent } from './components/related-items/related-items.component';
import { RelatedItemComponent } from './components/related-item/related-item.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CategoriesComponent } from './home/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripsComponent,
    TripComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchResultComponent,
    MainActivitiesComponent,
    TestimonialsComponent,
    HomeMainComponent,
    PopularActivitiesComponent,
    ActivitySuggestionsComponent,
    ActivityDetailsComponent,
    RelatedItemsComponent,
    RelatedItemComponent,
    FooterComponent,
    CategoriesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
