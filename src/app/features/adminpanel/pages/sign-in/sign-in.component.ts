import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HelperService } from '../../../../shared/services/helper/helper.service';
import { _PasswordPattern, IForm, ILogin } from '../../../../core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  
  hide: boolean = true;
  loginForm!: FormGroup;

  constructor(private _FB: FormBuilder, private _helperService: HelperService) { }

  ngOnInit(): void {
    const DEFAULT_VALIDATORS = [Validators.required];
    const EMAIL_VALIDATORS = [...DEFAULT_VALIDATORS, Validators.email];
    const PASSWORD_VALIDATORS = [...DEFAULT_VALIDATORS, Validators.pattern(_PasswordPattern)];

    const Login: IForm<ILogin> = {
      email: [null, EMAIL_VALIDATORS],
      password: [null, PASSWORD_VALIDATORS]
    }

    this.loginForm = this._FB.group(Login);
  }

  login() { }

  doesControlHasError(controlName: string) {
    return this._helperService.doesControlHasError(this.loginForm, controlName);
  }
}
