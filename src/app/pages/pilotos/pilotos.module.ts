import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PilotosRoutingModule } from './pilotos-routing.module';
import { PilotosComponent } from './pilotos.component';


@NgModule({
  declarations: [
    PilotosComponent
  ],
  imports: [
    CommonModule,
    PilotosRoutingModule
  ]
})
export class PilotosModule { }
