import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Drivers } from './../model/drivers';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  private readonly API = 'http://ergast.com/api/f1/drivers.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Drivers[]>('this.API');
  }
}
