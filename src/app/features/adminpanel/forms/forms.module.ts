import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { CardShellComponent } from '../../shared/components/card-shell/card-shell.component';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { Form3Component } from './components/form3/form3.component';
import { Form4Component } from './components/form4/form4.component';
import { Form5Component } from './components/form5/form5.component';
import { Form6Component } from './components/form6/form6.component';
import { Form7Component } from './components/form7/form7.component';
import { Form8Component } from './components/form8/form8.component';
import { Form9Component } from './components/form9/form9.component';
import { Form10Component } from './components/form10/form10.component';
import { Form11Component } from './components/form11/form11.component';
import { Form12Component } from './components/form12/form12.component';
import { Form13Component } from './components/form13/form13.component';
import { Form14Component } from './components/form14/form14.component';
import { Form15Component } from './components/form15/form15.component';
import { Form16Component } from './components/form16/form16.component';


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    CardShellComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form6Component,
    Form7Component,
    Form8Component,
    Form9Component,
    Form10Component,
    Form11Component,
    Form12Component,
    Form13Component,
    Form14Component,
    Form15Component,
    Form16Component
  ]
})
export class FormsModule { }
