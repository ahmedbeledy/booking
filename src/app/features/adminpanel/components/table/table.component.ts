import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Table } from './model/Table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],

})
export class TableComponent {
  pageSize = 10;
  pageIndex = 1;
  @Input() columns!: Table.IColumn[];
  // the data which i recived from facilites component for example
  @Input() data!: any[];
  @Input() operators!: Table.IOperators[];
  @Output() operationData = new EventEmitter();
  constructor() {

  }

  selectedOp(operator: any): (row: any)=>void{
    return this.defaultAction(operator.title);
  }

  defaultAction(opInfo: string){
    return (row: any)=>{
      this.operationData.emit({ row: row, opInfo: opInfo });
    }
  }

  getLength(obj: object) {
    return Object.keys(obj).length;
  }

  isDate(value: any) {
    return !Number.isNaN(Date.parse(value));
  }

  isArray(value: any){
    return Array.isArray(value);
  }

}
