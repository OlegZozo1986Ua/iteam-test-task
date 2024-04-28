import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from '../../../services/apiUsers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  public userRole: string = '';

  constructor(private usersService: ApiUsersService, private router: Router) {}

  ngOnInit() {
    this.userRole = this.usersService.apiResponse.role;
  }

  public openUserAssessment() {
    this.router.navigate(['userassessments']);
  }

  public openUsersList() {
    this.router.navigate(['userslist'])
  }

  public logOut() {
    this.usersService.logOut();
  }
}
