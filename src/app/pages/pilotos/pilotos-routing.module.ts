import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PilotosComponent } from './pilotos.component';

const routes: Routes = [
  { path: '', component: PilotosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotosRoutingModule { }
