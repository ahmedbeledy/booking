import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _StepNames, IForm1 } from '../../model';
import { IEmit } from '../../model/IEmit.model';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [],
  templateUrl: './form1.component.html'
})
export class Form1Component {
  @Input() step_name: _StepNames = "step1";
  @Output() data = new EventEmitter<IEmit<IForm1>>();

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
