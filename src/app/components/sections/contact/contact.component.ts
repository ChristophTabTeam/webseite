import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faPaperPlane, faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  width: number
  height: number

  faPaperPlane = faPaperPlane
  faUser = faUser
  faEnvelope = faEnvelope
  faComment = faComment

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }

  onSubmit() {

  }

}
