import { Component, OnInit } from '@angular/core';
import { faDisplay, faFireFlameCurved, faHashtag, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  faFireFlameCurved = faFireFlameCurved
  faDisplay = faDisplay
  faHashtag = faHashtag
  faPaperPlane = faPaperPlane

  width: number
  height: number
  activeServ: string = 'branding'

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }

  setBrandingActive() {
    this.activeServ = 'branding'
  }

  setWebdesignActive() {
    this.activeServ = 'webdesign'
  }

  setSocialMediaActive() {
    this.activeServ = 'socialmedia'
  }
}
