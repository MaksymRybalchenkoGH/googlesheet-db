import { Component, OnInit } from '@angular/core';
import { MenuList } from '../../shared/constants/navigationMap'

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  public readonly menuList = MenuList

  constructor() { }

  ngOnInit() {
  }

}
