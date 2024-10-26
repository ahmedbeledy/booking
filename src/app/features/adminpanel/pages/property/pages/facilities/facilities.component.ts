import { Component } from '@angular/core';
import { DetailedQuestionComponent } from '../../../../components/detailed-question/detailed-question.component';
import { CustomCheckboxesComponent } from '../../../../components/custom-inputs/custom-checkboxes/custom-checkboxes.component';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [DetailedQuestionComponent, CustomCheckboxesComponent],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss'
})
export class FacilitiesComponent {

}
