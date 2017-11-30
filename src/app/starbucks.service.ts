import { Injectable } from '@angular/core';
import { Menu } from './models';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class StarbucksService {

  constructor() { }

  getMenu(): Observable<Menu[]> {
    return of(this.mockMenu());
  }

  mockMenu(): Menu[] {
    return [{
      id: 1,
      name: 'Fresh Brews',
      offerings: [{
        id: 1,
        name: 'Regular Coffee',
        description: 'Our best blend'
      }, {
        id: 2,
        name: 'Cappuccino',
        description: 'Creamy and delicious'
      }]
    }, {
      id: 2,
      name: 'Cold Brews',
      offerings: [{
        id: 3,
        name: 'Iced Tea',
        description: 'Best tea in the world, iced.'
      }, {
        id: 4,
        name: 'Iced Coffee',
        description: 'Our regular brewed coffee, iced.'
      }]
    }, {
      id: 3,
      name: 'New fizzio',
      offerings: [{
        id: 5,
        name: 'Lemon Ale Fizzio',
        description: 'real lemon juice with a hint of apricot and ginger'
      }, {
        id: 6,
        name: 'Ginger Ale',
        description: 'not your average ginger ale'
      }]
    }, {
      id: 4,
      name: 'Espresso Drinks',
      offerings: [{
        id: 7,
        name: 'Caffe Americano',
        description: 'Watered down espresso mixed with milk'
      }, {
        id: 8,
        name: 'Caffe Latte',
        description: 'Large espresso mixed with milk'
      }]
    }, {
      id: 5,
      name: 'Frappuccino Blends',
      offerings: [{
        id: 9,
        name: 'Caramel Frappuccino',
        description: 'Regular coffee iced and mixed with salted caramel'
      }, {
        id: 10,
        name: 'Almond Frappuccino',
        description: 'Regular coffee iced and mixed with almond flakes'
      }]
    }];
  }

}
