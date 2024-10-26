import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _INullable } from '../../../../core';
import { _StepNames, IEmit, IForm15 } from '../../model';

@Component({
  selector: 'app-form15',
  standalone: true,
  imports: [],
  templateUrl: './form15.component.html',
  styleUrl: './form15.component.scss'
})
export class Form15Component {
  @Input() step_name: _StepNames = "step15";
  @Output() data = new EventEmitter<IEmit<IForm15>>();
  values: _INullable<IForm15> = {
    name: null
  }


  setFormData<T extends keyof IForm15>(key: T, value: IForm15[T]) {
    this.values = {
      ...this.values,
      [key]: value
    };
    this.data.emit({
      step_name: this.step_name,
      data: this.values as IForm15,
      isValid: !Object.values(this.values).some((value) => value === null),
    });
  }
}
