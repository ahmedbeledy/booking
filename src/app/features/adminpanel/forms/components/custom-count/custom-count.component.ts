import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-count',
  standalone: true,
  imports: [],
  templateUrl: './custom-count.component.html',
  styleUrl: './custom-count.component.scss'
})
export class CustomCountComponent {
  @Input() key: string = Math.random().toString(16).slice(2);
  @Input() value: number = 0;
  @Input() max: number = 100;
  @Input() unsigned: boolean = true;
  @Output() valueChange = new EventEmitter<number>();
  // @Output() change = new EventEmitter<{key: string, value: number}>();

  increase(){
    if(this.value < this.max) this.value++;
    this.valueChange.emit(this.value);
    // this.emitChange();
  }

  decrease(){
    if(this.unsigned && this.value === 0) return;
    this.value--;
    this.valueChange.emit(this.value);
    // this.emitChange();
  }

  // emitChange(){
  //   this.change.emit({
  //     key: this.key,
  //     value: this.value
  //   })
  // }
}
