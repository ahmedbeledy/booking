import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-checkboxes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './custom-checkboxes.component.html',
  styleUrl: './custom-checkboxes.component.scss'
})
export class CustomCheckboxesComponent {
  @Input() isDuo: boolean = false;
  @Input() id = Math.random().toString(16).slice(2);
  @Input() label: string = "Null";
  @Input() checkboxValue!: any;
  @Input() name!: string;
  @Input() isChecked: boolean | null = null;
  
  @Output() onChange = new EventEmitter();

  customCheck(value: boolean){
    this.isChecked = value;
    this.emitChange(value)
  }

  regCheck($event: any){
    this.isChecked = $event.target.checked;
    this.emitChange($event.target.checked);
  }

  emitChange(value:boolean){
    this.onChange.emit({isChecked: value, value: this.checkboxValue})
  }

}
