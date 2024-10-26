import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _StepNames, IEmit, IForm2 } from '../../model';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [],
  templateUrl: './form2.component.html'
})
export class Form2Component {
  @Input() step_name: _StepNames = "step2";
  @Output() data = new EventEmitter<IEmit<IForm2>>();

  setFormData(value: boolean){
    this.data.emit({
      step_name: this.step_name,
      data: {
        answer: value
      },
      isValid: true,
    });
  }
}
