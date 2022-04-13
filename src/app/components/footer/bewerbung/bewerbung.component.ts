import { jobs } from './../../../modules/Jobs';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-bewerbung',
  templateUrl: './bewerbung.component.html',
  styleUrls: ['../contents.component.scss']
})
export class BewerbungComponent implements OnInit {
  applicationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    job: new FormControl(''),
    cv: new FormControl('', Validators.required),
    appl: new FormControl('', Validators.required),
    files: new FormControl('')
  })

  jobs = jobs
  faArrowUpFromBracket = faArrowUpFromBracket

  applyedJob: string

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.applyedJob = this.footerService.applyToJob
    console.log(this.applyedJob)
  }

  onSubmit() {

  }


}
