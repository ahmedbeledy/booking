import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _INullable, ITime } from '../../../../core';
import { _StepNames, IEmit, IForm11 } from '../../model';
import { take } from 'rxjs';
import { LookupsService } from '../../../../shared/services/lookups/lookups.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form11',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form11.component.html'
})
export class Form11Component {
  @Input() step_name: _StepNames = "step11";
  @Output() data = new EventEmitter<IEmit<IForm11>>();
  values: _INullable<IForm11> = {
    checkin_from: null,
    checkin_to: null,
    checkout_from: null,
    checkout_to: null,
    question1: null,
    question2: null
  }

  times: ITime[] = [];

  constructor(private _lookups: LookupsService) { }

  ngOnInit(): void {
    this.getTimes()
  }

  getTimes() {
    this._lookups.getTimes().pipe(take(1)).subscribe({
      next: (res) => {
        this.times = res;
      },
      error: (err) => {

      }
    })
  }

  setFormData<T extends keyof IForm11>(key: T, value: IForm11[T]) {
    this.values = {
      ...this.values,
      [key]: value
    };
    this.data.emit({
      step_name: this.step_name,
      data: this.values as IForm11,
      isValid: !Object.values(this.values).some((value) => value === null),
    });
  }
}
