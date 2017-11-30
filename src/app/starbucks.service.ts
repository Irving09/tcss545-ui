import { Injectable } from '@angular/core';
import { Menu } from './models';

@Injectable()
export class StarbucksService {

  constructor() { }

  getMenu(): Menu[] {
    return [];
  };

}
