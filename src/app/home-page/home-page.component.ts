import { Component, OnInit } from '@angular/core'
import { MenuIdEnum } from '../shared/models/common'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public readonly MenuIdEnum = MenuIdEnum
  constructor() {}

  ngOnInit() {}
}
