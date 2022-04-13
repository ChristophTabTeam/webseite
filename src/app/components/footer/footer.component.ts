import { Component, OnInit, ViewChild } from '@angular/core';
import { chapters as privacyChapters } from './datenschutz/chapters';
import { chapters as jobsChapters } from './jobs/chapters';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('datenschutzRef') datenschutzRef: DatenschutzComponent

  privacyChapters = privacyChapters
  jobsChapters = jobsChapters
  width: number
  height: number
  activeContent: string = 'jobs'
  year: number = new Date().getFullYear()
  contents = {
    agb: 'agb',
    jobs: 'jobs',
    media: 'media',
    bewerbung: 'bewerbung',
    impressum: 'impressum',
    datenschutz: 'datenschutz'
  }

  constructor() { }

  ngOnInit(): void {
    this.height = window.innerHeight
    this.width = window.innerWidth
  }

  setContent(content: string) {
    this.activeContent = content
  }

  setContentToApply() {
    this.activeContent = 'bewerbung'
  }
}
