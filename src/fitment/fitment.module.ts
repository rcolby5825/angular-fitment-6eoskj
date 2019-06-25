import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { reducers, effects } from './store'

import { FitmentService}  from './services/fitment.service';

import { FitmentContainerComponent } from './fitment-container/fitment-container.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('fitment', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [FitmentContainerComponent],
  providers: [FitmentService],
  exports: [FitmentContainerComponent]
})
export class FitmentModule { }