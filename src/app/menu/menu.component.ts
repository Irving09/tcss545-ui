import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StarbucksService } from '../starbucks.service';
import { Menu } from '../models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu[];

  error: Error;

  selectedMenu: Menu;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private starbucksService: StarbucksService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu(): void {
    this.starbucksService.getMenu()
      .subscribe(menu => this.menu = menu, errorMessage => this.error = new Error(errorMessage));
  }

}
