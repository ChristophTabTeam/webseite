import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  width: number
  height: number
  activeContent: string = 'bewerbung'
  contents = {
    agb: 'agb',
    jobs: 'jobs',
    media: 'media',
    bewerbung: 'bewerbung',
    impressum: 'impressum',
    datenschutz: 'datenschutz'
  }
  year: number = new Date().getFullYear()

  constructor() { }

  ngOnInit(): void {
    this.height = window.innerHeight
    this.width = window.innerWidth
  }

  setContent(content: string) {
    this.activeContent = content
  }
}
