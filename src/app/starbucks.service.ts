import { Injectable } from '@angular/core';
import { Menu } from './models';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StarbucksService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>('http://localhost:3000/menu');
  }

}
