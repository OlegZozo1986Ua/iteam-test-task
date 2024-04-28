import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from '../../../services/apiUsers.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{
  public usersList: IUser[] = [];

  constructor(private apiUserService: ApiUsersService) {}

  ngOnInit() {
    this.apiUserService.getUsersList().subscribe((res) => {
      this.usersList = res;
    })
  }
}
