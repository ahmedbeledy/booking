import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _StepNames, IEmit, IForm12 } from '../../model';
import { _INullable } from '../../../../core';
import { CustomCountComponent } from '../custom-count/custom-count.component';

@Component({
  selector: 'app-form12',
  standalone: true,
  imports: [CustomCountComponent],
  templateUrl: './form12.component.html',
  styleUrl: './form12.component.scss'
})
export class Form12Component {
  @Input() step_name: _StepNames = "step12";
  @Output() data = new EventEmitter<IEmit<IForm12>>();
  values: _INullable<IForm12> = {
    type: null,
    count: null,
    single_bed: null,
    double_bed: null,
    large_bed: null,
    xlarge_bed: null,
    guests: null,
    size: null,
    size_unit: null,
    smoking_in: null,
  }


  constructor() { }

  ngOnInit(): void {
  }


  setFormData<T extends keyof IForm12>(key: T, value: IForm12[T]) {
    this.values = {
      ...this.values,
      [key]: value
    };
    this.data.emit({
      step_name: this.step_name,
      data: this.values as IForm12,
      isValid: !Object.values(this.values).some((value) => value === null),
    });
  }

  returnValueAsT<T>(value: any){
    return value as T;
  }

  // isKeyOf<T extends keyof IForm12>(value: string){
  //   return value as T;
  // }
}
