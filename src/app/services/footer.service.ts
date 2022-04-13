import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  applyToJob: string

  constructor() { }

  setApplyJob(elem: string) {
    this.applyToJob = elem
  }
}
