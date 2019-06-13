import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  public readonly menuList = [
    { id: 'red', name: 'red' },
    { id: 'green', name: 'green' },
    { id: 'blue', name: 'blue' },
    { id: 'yellow', name: 'yellow' },
    { id: 'grey', name: 'grey' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
