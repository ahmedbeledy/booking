import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-radio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-radio.component.html',
  styleUrl: './custom-radio.component.scss'
})
export class CustomRadioComponent {

  @Input() id = Math.random().toString(16).slice(2);
  @Input() label: string = "Null";
  @Input() radioValue!: string;
  @Input() name!: string;
  @Input() isChecked: boolean | null = null;
  
  @Input() value!: string;
  @Output() valueChange = new EventEmitter();

  checked($event: any) {
    this.valueChange.emit($event);
  }
}
