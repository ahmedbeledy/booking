import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILanguage } from '../../../../core';
import { take } from 'rxjs';
import { LookupsService } from '../../../../shared/services/lookups/lookups.service';
import { _StepNames, IEmit } from '../../model';
import { IForm10 } from '../../model/IForm10.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form10',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form10.component.html'
})
export class Form10Component {

  @Input() step_name: _StepNames = "step10";
  @Output() data = new EventEmitter<IEmit<IForm10>>();
  values: IForm10["languages"] = [];

  languages: ILanguage[] = [];
  showLangForm: boolean = false;
  langValue!: string; 

  constructor(private _lookups: LookupsService) { }

  ngOnInit(): void {
    this.getLanguages()
  }

  getLanguages() {
    this._lookups.getLanguages().pipe(take(1)).subscribe({
      next: (res) => {
        this.languages = res;
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
        languages: newValues
      },
      isValid: newValues.length === 0 ? false : true,
    });
  }

  onAddLanguage(val: string){
    if(!val.match(/^[a-zA-Z ]+$/gm)) return;
    this.languages.push({
      id: 0,
      name: val
    })
    this.showLangForm = false;
  }

}
