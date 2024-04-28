import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IGraph } from '../../interfaces';

@Component({
  selector: 'app-assessment',
  standalone: true,
  templateUrl: './assessment.component.html'
})
export class AssessmentComponent {
  @Input() graph: Partial<IGraph> = {};

  constructor(public activeModal: NgbActiveModal) {}
}
