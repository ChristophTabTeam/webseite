import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  width: number
  height: number
  activeTeam: string = 'founder'
  teams = {
    founder: 'founder',
    marketing: 'marketing',
    solutions: 'solutions',
    creative: 'creative'
  }

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }

  setActive(team: string) {
    this.activeTeam = team
  }
}
