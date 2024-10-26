import { Component } from '@angular/core';
import { IEmit, IStepperForms, IStepsValidation, StepperFormsTypes } from './model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent {

  data!: IStepperForms;

  isValid: IStepsValidation = {
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
    step9: false,
    step10: false,
    step11: false,
    step12: false,
    step13: false,
    step14: false,
    step15: false,
    step16: false
  }

  setFormData<T extends StepperFormsTypes>(Emit: IEmit<T>) {
    console.log(Emit);
    this.data = {
      ...this.data,
      [Emit.step_name]: Emit.data
    } 
    this.isValid[Emit.step_name] = Emit.isValid;
  }

  cnlog<T extends string | number>(values: T[]) {
    console.log(...values);
  }
}
