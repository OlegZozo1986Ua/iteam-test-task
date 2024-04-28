import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AssessmentComponent } from '../modals/assessment/assessment.component';
import { ApiUsersService } from '../../../services/apiUsers.service';
import { IAssessment } from '../interfaces';

@Component({
  selector: 'app-user-assessmants',
  templateUrl: './user-assessmants.component.html',
  styleUrl: './user-assessmants.component.scss'
})
export class UserAssessmantsComponent implements OnInit {
  public userAssessments: IAssessment[] = [];

  constructor(private apiUserService: ApiUsersService, private modalService: NgbModal) {}

  ngOnInit() {
    this.apiUserService.getUserAssessments().subscribe((res) => {
      this.userAssessments = res ?? [];
    })
  }

  open(id: number) {
    this.apiUserService.getUserGraph(id).subscribe((res) => {
      const modalRef = this.modalService.open(AssessmentComponent);
      modalRef.componentInstance.graph = res;
    })
  }
}
