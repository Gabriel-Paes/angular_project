import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';

import { DropdownComponent } from './dropdown/dropdown.component';
import { PilotosRoutingModule } from './pilotos-routing.module';
import { PilotosComponent } from './pilotos.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    PilotosComponent,
    TableComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    PilotosRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzListModule,
    NzDropDownModule
  ]
})
export class PilotosModule { }
