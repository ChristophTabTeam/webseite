import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit {
  @Output('setContentApply') setContentApply: EventEmitter<any> = new EventEmitter()
  jobTitle: string = 'designer'

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
  }

  setActiveJob(elem: string) {
    this.footerService.setApplyJob(elem)
    this.setContentApply.emit()
  }
}
