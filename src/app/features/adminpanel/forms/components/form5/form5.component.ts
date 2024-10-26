import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { _INullable, IArea } from '../../../../core';
import { LookupsService } from '../../../../shared/services/lookups/lookups.service';
import { _StepNames, IEmit, IForm5 } from '../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form5.component.html'
})
export class Form5Component implements OnInit {
  @Input() step_name: _StepNames = "step5";
  @Output() data = new EventEmitter<IEmit<IForm5>>();
  values: _INullable<IForm5> = {
    country: null,
    address: null
  };

  areas: IArea[] = [];

  constructor(private _Lookups: LookupsService) { }

  ngOnInit(): void {
    this.getLookups()
  }
  getLookups() {
    this.getAreas()
  }

  getAreas() {
    this._Lookups.getAreas().subscribe({
      next: (res) => {
        this.areas = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  setFormData<T extends keyof IForm5>(key: T, value: IForm5[T]) {
    this.values = {
      ...this.values,
      [key]: value
    };
    this.data.emit({
      step_name: this.step_name,
      data: this.values as IForm5,
      isValid: !Object.values(this.values).some((value) => value === null),
    });
  }

  Number(value: string){
    return Number(value);
  }
}
