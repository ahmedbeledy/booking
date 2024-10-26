import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { _StepNames, IEmit, IForm4 } from '../../model';
import { _INullable, IInvoice } from '../../../../core';
import { LookupsService } from '../../../../shared/services/lookups/lookups.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form4.component.html'
})
export class Form4Component implements OnInit {
  @Input() step_name: _StepNames = "step4";
  @Output() data = new EventEmitter<IEmit<IForm4>>();
  values: _INullable<IForm4> = {
    question1: null,
    question2: null
  }

  invoices: IInvoice[] = [];

  constructor(private _lookups: LookupsService) { }

  ngOnInit(): void {
    this.getInvoices()
  }

  getInvoices() {
    this._lookups.getInvoices().pipe(take(1)).subscribe({
      next: (res) => {
        this.invoices = res;
      },
      error: (err) => {

      }
    })
  }

  setFormData<T extends keyof IForm4>(key: T, value: IForm4[T]) {
    this.values = {
      ...this.values,
      [key]: value
    };
    this.data.emit({
      step_name: this.step_name,
      data: this.values as IForm4,
      isValid: !Object.values(this.values).some((value) => value === null),
    });
  }
}
