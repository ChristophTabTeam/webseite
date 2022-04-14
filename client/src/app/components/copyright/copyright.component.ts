import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  year: number = new Date().getFullYear()

  width: number

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth
  }

}
