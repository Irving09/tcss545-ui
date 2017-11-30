import { Injectable } from '@angular/core';
import { Menu } from './models';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StarbucksService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.baseUrl}/menu`);
  }

}
