import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserAssessmantsComponent } from './user-assessmants/user-assessmants.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserAssessmantsComponent,
    UsersListComponent,
  ],
  exports: [
    DashboardComponent,
    DashboardRoutingModule
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
