import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { SlideRulerComponent } from './slide-ruler/slide-ruler.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [SlideRulerComponent],
  exports: [SlideRulerComponent],
})
export class SharedComponentsModule {}
