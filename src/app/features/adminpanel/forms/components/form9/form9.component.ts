import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _INullable } from '../../../../core';
import { _StepNames, IEmit, IForm9 } from '../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form9.component.html'
})
export class Form9Component {
  @Input() step_name: _StepNames = "step9";
  @Output() data = new EventEmitter<IEmit<IForm9>>();
  values: _INullable<IForm9> = {
    question1: null,
    question2: null,
    question3: null,
    question4: null
  }

  setFormData<T extends keyof IForm9>(key: T, value: IForm9[T]) {
    this.values = {
      ...this.values,
      [key]: value
    };
    this.data.emit({
      step_name: this.step_name,
      data: this.values as IForm9,
      isValid: !Object.values(this.values).some((value) => value === null) || this.values.question1 === "no",
    });
  }
}
