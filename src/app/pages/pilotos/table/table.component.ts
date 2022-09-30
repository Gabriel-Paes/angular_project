import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DriversService } from '../services/drivers.service';
import { Drivers } from './../model/drivers';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  
  drivers: Observable<Drivers[]>;

  constructor(private driversService: DriversService) {
    this.drivers = this.driversService.list();
  }
  
/*   drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.drivers, event.previousIndex, event.currentIndex);
  } */

  ngOnInit(): void {
    
  }
}
