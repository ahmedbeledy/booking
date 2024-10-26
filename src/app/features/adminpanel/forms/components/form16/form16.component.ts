import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _INullable } from '../../../../core';
import { _StepNames, IEmit } from '../../model';
import { IForm16 } from '../../model/IForm16.model';

@Component({
  selector: 'app-form16',
  standalone: true,
  imports: [],
  templateUrl: './form16.component.html',
  styleUrl: './form16.component.scss'
})
export class Form16Component {
  @Input() step_name: _StepNames = "step16";
  @Output() data = new EventEmitter<IEmit<IForm16>>();
  values: _INullable<IForm16> = {
    price: null
  }


  setFormData<T extends keyof IForm16>(key: T, value: IForm16[T]) {
    this.values = {
      ...this.values,
      [key]: value
    };
    this.data.emit({
      step_name: this.step_name,
      data: this.values as IForm16,
      isValid: !Object.values(this.values).some((value) => value === null),
    });
  }
  castInt(value: string){
    const result = parseInt(value) || 0;
    return result;
  }
}
