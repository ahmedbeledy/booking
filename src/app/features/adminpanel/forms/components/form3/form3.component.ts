import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmit, IForm3, _StepNames } from '../../model';
import { IPaymentCards } from '../../../../core';
import { LookupsService } from '../../../../shared/services/lookups/lookups.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form3.component.html',
})
export class Form3Component implements OnInit {
  @Input() step_name: _StepNames = "step3";
  @Output() data = new EventEmitter<IEmit<IForm3>>();
  values: IForm3["answer"] = [];

  cards!: IPaymentCards[];

  constructor(private _Lookups: LookupsService){}

  ngOnInit(): void {
      this.getCards()
  }

  getCards(){
    this._Lookups.getPaymentCard().pipe(take(1)).subscribe({
      next: (res)=>{
        this.cards = res;
      },
      error: (err)=>{

      }
    })
  }

  setFormData(e: any){
    let newValues = e.target.checked ? [...this.values, e.target.value] : this.values.filter((value)=>value!==e.target.value);
    this.values = [...newValues];
    this.data.emit({
      step_name: this.step_name,
      data: {
        answer: newValues
      },
      isValid: newValues.length === 0 ? false : true,
    });
  }

}
