import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CustomCheckboxesComponent } from '../custom-inputs/custom-checkboxes/custom-checkboxes.component';
import { CustomRadioComponent } from '../custom-inputs/custom-radio/custom-radio.component';

@Component({
  selector: 'app-detailed-question',
  standalone: true,
  imports: [TranslateModule, CommonModule, CustomCheckboxesComponent, CustomRadioComponent],
  templateUrl: './detailed-question.component.html',
  styleUrl: './detailed-question.component.scss'
})
export class DetailedQuestionComponent {
  name: string = Math.random().toString(16).slice(2);
  @Input() label!: string;
  @Input() hasDetails: boolean = false;
  @Input() required: boolean = false;
  @Input() value!: boolean;
  @Output() onChange = new EventEmitter();
  hidden: boolean = true;
  
  onCheck(e: any){
    this.value = e.isChecked;
    this.onChange.emit(e)
  }
}
