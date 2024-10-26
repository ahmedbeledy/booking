import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _StepNames, IEmit, IForm13 } from '../../model';
import { _INullable } from '../../../../core';

@Component({
  selector: 'app-form13',
  standalone: true,
  imports: [],
  templateUrl: './form13.component.html',
  styleUrl: './form13.component.scss'
})
export class Form13Component {
  @Input() step_name: _StepNames = "step13";
  @Output() data = new EventEmitter<IEmit<IForm13>>();
  values: _INullable<IForm13> = {
    private_bathroom: null,
    bathroom_items: []
  }

  items: string [] = [
    "Toilet paper",
    "Shower",
    "Toilet",
    "Haridryer",
    "Bath",
    "Free toiletries",
    "Bidet",
    "Slippers",
    "Bathrobe",
    "Spa bath"
  ]


  setFormData<T extends keyof IForm13>(key: T, value: IForm13[T]) {
    this.values = {
      ...this.values,
      [key]: value
    };
    this.data.emit({
      step_name: this.step_name,
      data: this.values as IForm13,
      isValid: !Object.values(this.values).some((value) => value === null),
    });
  }

  prepareValue<T extends IForm13['bathroom_items']>(e: any) {
    let newValues = e.target.checked ? [...(this.values.bathroom_items as T), e.target.value] : (this.values.bathroom_items as T).filter((value) => value !== e.target.value);
    this.values.bathroom_items = [...newValues];
    return newValues;
  }
}
