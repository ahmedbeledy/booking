import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { _PasswordPattern, IForm, IRegister } from '../../core';
import { RouterModule } from '@angular/router';
import { CardShellComponent } from "../../shared/components/card-shell/card-shell.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CardShellComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  
  hide: boolean = true;
  hide_confirm: boolean = true;
  registerForm!: FormGroup;

  constructor(private _FB: FormBuilder) { }

  ngOnInit(): void {
    const DEFAULT_VALIDATORS = [Validators.required];
    const EMAIL_VALIDATORS = [...DEFAULT_VALIDATORS, Validators.email];
    const PASSWORD_VALIDATORS = [...DEFAULT_VALIDATORS, Validators.pattern(_PasswordPattern)];

    const register: IForm<IRegister> = {
      first_name: [null, DEFAULT_VALIDATORS],
      last_name: [null, DEFAULT_VALIDATORS],
      email: [null, EMAIL_VALIDATORS],
      phone_number: [null, DEFAULT_VALIDATORS],
      code: [null, DEFAULT_VALIDATORS],
      birthday: [null, DEFAULT_VALIDATORS],
      gender: [null, DEFAULT_VALIDATORS],
      nationality: [null, DEFAULT_VALIDATORS],
      password: [null, PASSWORD_VALIDATORS],
      confirm_password: [null, PASSWORD_VALIDATORS]
    }

    this.registerForm = this._FB.group(register)
  }

  register() { }

  matchPassword(form: FormGroup) {
    return form.get('password')?.value === form.get("confirm_password") ? true : false;
  }

}
