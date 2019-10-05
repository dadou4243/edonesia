import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './app-admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './store/user';
import { UserEffects } from './store/user/user.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    StoreModule.forRoot({ user: userReducer }),
    StoreDevtoolsModule.instrument({
      name: 'Unique Trip app'
    }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
