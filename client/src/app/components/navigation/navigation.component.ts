import { Component, HostListener, Input, OnInit } from '@angular/core';
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

  sections = {
    start: 'home',
    service: 'service',
    team: 'team',
    contact: 'contact',
    footer: 'footer',
    empty: ''
  }

  width: number
  height: number
  activeSection: string
  hoveredSection: string

  @Input() start: HTMLElement
  @Input() service: HTMLElement
  @Input() team: HTMLElement
  @Input() contact: HTMLElement
  @Input() footer: HTMLElement

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth
    this.height = window.innerHeight
    window.addEventListener('scroll', (e) => {
      this.setSection()
    })
  }

  scrollToSection($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

  setSection() {
    const scrollY = window.scrollY
    const height = window.innerHeight
    if (window.innerWidth < 768) {
      if (scrollY <= height - 100) {
        this.activeSection = 'home'
      } else if (scrollY <= height * 2.5 - 100) {
        this.activeSection = 'service'
      } else if (scrollY <= height * 3.5 - 100) {
        this.activeSection = 'team'
      } else if (scrollY <= height * 4.5 - 100) {
        this.activeSection = 'contact'
      } else if (scrollY <= height * 5.5 - 100) {
        this.activeSection = 'footer'
      }
    } else if (window.innerWidth < 900) {
      if (scrollY <= height - 100) {
        this.activeSection = 'home'
      } else if (scrollY <= height * 2.5 - 100) {
        this.activeSection = 'service'
      } else if (scrollY <= height * 3.5 - 100) {
        this.activeSection = 'team'
      } else if (scrollY <= height * 4.5 - 100) {
        this.activeSection = 'contact'
      } else if (scrollY <= height * 5.5 - 100) {
        this.activeSection = 'footer'
      }
    } else {
      if (scrollY <= height - 100) {
        this.activeSection = 'home'
      } else if (scrollY <= height * 2 - 100) {
        this.activeSection = 'service'
      } else if (scrollY <= height * 3 - 100) {
        this.activeSection = 'team'
      } else if (scrollY <= height * 4 - 100) {
        this.activeSection = 'contact'
      } else if (scrollY <= height * 5 - 100) {
        this.activeSection = 'footer'
      }
    }
  }

  hoverSection(elem: string) {
    this.hoveredSection = elem
  }

  unsetHoveredSection() {
    this.hoveredSection = ''
  }
}
