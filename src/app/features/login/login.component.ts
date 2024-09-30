import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { _PasswordPattern, IForm, ILogin } from '../../core';
import { RouterModule } from '@angular/router';
import { CardShellComponent } from "../../shared/components/card-shell/card-shell.component";
import { HelperService } from '../../shared/services/helper/helper.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CardShellComponent, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

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

  doesControlHasError(controlName: string){
    return this._helperService.doesControlHasError(this.loginForm, controlName);
  }


}
