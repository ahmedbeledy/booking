import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { _INullable, IFacility } from '../../../../core';
import { take } from 'rxjs';
import { LookupsService } from '../../../../shared/services/lookups/lookups.service';
import { _StepNames, IEmit, IForm7 } from '../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form7.component.html'
})
export class Form7Component implements OnInit{
  @Input() step_name: _StepNames = "step7";
  @Output() data = new EventEmitter<IEmit<IForm7>>();
  values: IForm7["facilities"] = [];

  facilities: IFacility[] = [];

  constructor(private _lookups: LookupsService) { }

  ngOnInit(): void {
    this.getFacilities()
  }

  getFacilities() {
    this._lookups.getFacilities().pipe(take(1)).subscribe({
      next: (res) => {
        this.facilities = res;
      },
      error: (err) => {

      }
    })
  }

  setFormData(e: any){
    let newValues = e.target.checked ? [...this.values, e.target.value] : this.values.filter((value)=>value!==e.target.value);
    this.values = [...newValues];
    this.data.emit({
      step_name: this.step_name,
      data: {
        facilities: newValues
      },
      isValid: newValues.length === 0 ? false : true,
    });
  }
}
