import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in.component';
import { LogInRoutingModule } from './log-in-routing.module.';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    LogInRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [LogInRoutingModule]
})
export class LogInModule {}
