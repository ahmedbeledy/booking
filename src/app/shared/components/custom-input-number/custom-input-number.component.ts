import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input-number',
  templateUrl: './custom-input-number.component.html'
})
export class CustomInputNumberComponent {
  @Input() value: number = 0;
  @Input() max: number = 100;
  @Input() unsigned: boolean = true;
  @Output() valueChange = new EventEmitter<number>()

  increase(){
    if(this.value < this.max) this.value++;
    this.valueChange.emit(this.value);
  }

  decrease(){
    if(this.unsigned && this.value === 0) return;
    this.value--;
    this.valueChange.emit(this.value);
  }
}
