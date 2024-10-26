import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _StepNames, IEmit, IForm14 } from '../../model';
import { _INullable } from '../../../../core';

@Component({
  selector: 'app-form14',
  standalone: true,
  imports: [],
  templateUrl: './form14.component.html',
  styleUrl: './form14.component.scss'
})
export class Form14Component {
  @Input() step_name: _StepNames = "step14";
  @Output() data = new EventEmitter<IEmit<IForm14>>();
  values: _INullable<IForm14> = {
    amenities: []
  }

  general: string [] = [
    "Clothes rack",
    "Flat-screen TV",
    "Air contditioning",
    "linen",
    "Desk",
    "Wake-up service",
    "Towels",
    "Waedrobe or closet",
    "Heating",
    "Fan",
    "Safety deposit box",
    "Towels/sheets (extra fee)",
    "Entire unit located on ground floor"
  ];

  outdoor: string[] = [
    "Balcony",
    "Terrace",
    "View"
  ];

  edible: string[] = [
    "Electric kattle",
    "Tea/Coffe maker",
    "Dining area",
    "Dining table",
    "Microwave"
  ];


  setFormData<T extends keyof IForm14>(key: T, value: IForm14[T]) {
    this.values = {
      ...this.values,
      [key]: value
    };
    this.data.emit({
      step_name: this.step_name,
      data: this.values as IForm14,
      isValid: !Object.values(this.values).some((value) => value === null),
    });
  }

  prepareValue<T extends IForm14['amenities']>(e: any) {
    let newValues = e.target.checked ? [...(this.values.amenities as T), e.target.value] : (this.values.amenities as T).filter((value) => value !== e.target.value);
    this.values.amenities = [...newValues];
    return newValues;
  }
}
