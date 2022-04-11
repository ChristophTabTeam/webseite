import { Component, OnInit } from '@angular/core';
import { faLightbulb, faPeopleGroup, faPaperPlane, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  faLightbulb = faLightbulb
  faPeopleGroup = faPeopleGroup
  faPaperPlane = faPaperPlane
  faCircleInfo = faCircleInfo

  width: number
  height: number
  activeSection: string = 'home'

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }
}
