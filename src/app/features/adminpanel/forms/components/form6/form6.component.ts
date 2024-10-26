import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _INullable, IArea } from '../../../../core';
import { _StepNames, IEmit, IForm6 } from '../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form6.component.html'
})
export class Form6Component {
  @Input() step_name: _StepNames = "step6";
  @Output() data = new EventEmitter<IEmit<IForm6>>();
  values: _INullable<IForm6> = {
    property_name: null,
    rate: null,
    question: null
  };

  stars: number[] = [1, 2, 3, 4, 5];

  constructor() { }


  setFormData<T extends keyof IForm6>(key: T, value: IForm6[T] | null) {
    this.values = {
      ...this.values,
      [key]: value
    };
    this.data.emit({
      step_name: this.step_name,
      data: this.values as IForm6,
      isValid: !Object.values(this.values).some((value) => value === null),
    });
  }

  Number(value: string) {
    return Number(value);
  }

  Array(n: number) {
    return Array(n).fill(0)
  }
}