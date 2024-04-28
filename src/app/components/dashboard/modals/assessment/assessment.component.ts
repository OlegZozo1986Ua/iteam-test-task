import { Component, Input, OnChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IGraph } from '../../interfaces';

@Component({
  selector: 'app-assessment',
  standalone: true,
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss'
})
export class AssessmentComponent implements  OnChanges{
  @Input() graph: Partial<IGraph> = {};

  constructor(public activeModal: NgbActiveModal) {}

  ngOnChanges() {
    console.log(this.graph);
  }
}
