import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiUsersService } from '../../services/apiUsers.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private authService: ApiUsersService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    });
  }

  public submit() {
    this.authService.login(this.form.value.email, this.form.value.password)
  }
}
