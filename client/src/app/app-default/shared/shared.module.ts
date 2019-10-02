import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookTripComponent } from './book-trip/book-trip.component';

@NgModule({
  declarations: [BookTripComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
