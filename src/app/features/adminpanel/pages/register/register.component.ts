import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HelperService } from '../../../../shared/services/helper/helper.service';
import { _PasswordPattern, IForm, IRegister } from '../../../../core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hide: boolean = true;
  hide_confirm: boolean = true;
  registerForm!: FormGroup;

  constructor(private _FB: FormBuilder, private _helperService: HelperService) { }

  ngOnInit(): void {
    const DEFAULT_VALIDATORS = [Validators.required];
    const EMAIL_VALIDATORS = [...DEFAULT_VALIDATORS, Validators.email];
    const PASSWORD_VALIDATORS = [...DEFAULT_VALIDATORS, Validators.pattern(_PasswordPattern)];

    const register: IForm<Partial<IRegister>> = {
      first_name: [null, DEFAULT_VALIDATORS],
      last_name: [null, DEFAULT_VALIDATORS],
      email: [null, EMAIL_VALIDATORS],
      phone_number: [null, DEFAULT_VALIDATORS],
      code: [null, DEFAULT_VALIDATORS],
      password: [null, PASSWORD_VALIDATORS],
      confirm_password: [null, PASSWORD_VALIDATORS]
    }

    this.registerForm = this._FB.group(register)
  }

  register() { }

  matchPassword(){
    return this._helperService.matchPassword(this.registerForm);
  }

  doesControlHasError(controlName: string){
    return this._helperService.doesControlHasError(this.registerForm, controlName);
  }
}
