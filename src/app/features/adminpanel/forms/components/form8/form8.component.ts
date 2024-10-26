import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmit } from '../../model';
import { _StepNames, IForm8 } from '../../model';


@Component({
  selector: 'app-form8',
  standalone: true,
  imports: [],
  templateUrl: './form8.component.html'
})
export class Form8Component {
  @Input() step_name: _StepNames = "step8";
  @Output() data = new EventEmitter<IEmit<IForm8>>();

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
