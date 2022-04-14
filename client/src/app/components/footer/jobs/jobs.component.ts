import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCircleDown, faCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['../contents.component.scss']
})
export class JobsComponent implements OnInit {
  @Output('setContentToApply') setContentToApply: EventEmitter<any> = new EventEmitter()
  faCircleDown = faCircleDown
  faCircleUp = faCircleUp

  jobs = {
    designer: 'designer',
    frontenddev: 'frontenddev'
  }
  activeJob: string = ''

  constructor() { }

  ngOnInit(): void {

  }

  setActiveJob(elem: string) {
    if (this.activeJob === '') {
      this.activeJob = elem
    } else {
      this.activeJob = ''
    }
  }

  setContentApply() {
    this.setContentToApply.emit()
  }
}
