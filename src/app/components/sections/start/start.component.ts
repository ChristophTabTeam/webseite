import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedinIn, faInstagram, faDiscord  } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  faFacebook = faFacebook
  faLinkedinIn = faLinkedinIn
  faInstagram = faInstagram
  faDiscord = faDiscord

  width: number
  height: number

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }

}
