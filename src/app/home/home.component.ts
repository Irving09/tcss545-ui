import { Component, OnInit } from '@angular/core';
import { StarbucksService } from '../starbucks.service';
import { Menu } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu: Menu[];

  error: Error;

  selectedMenu: Menu;

  constructor(private starbucksService: StarbucksService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu(): void {
    this.starbucksService.getMenu()
        .subscribe(menu => this.menu = menu, errorMessage => this.error = new Error(errorMessage));
  }

}
