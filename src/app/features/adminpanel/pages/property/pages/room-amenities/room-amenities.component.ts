import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomRadioComponent } from '../../../../components/custom-inputs/custom-radio/custom-radio.component';
import { CustomCheckboxesComponent } from '../../../../components/custom-inputs/custom-checkboxes/custom-checkboxes.component';

@Component({
  selector: 'app-room-amenities',
  standalone: true,
  imports: [FormsModule, CustomRadioComponent, CustomCheckboxesComponent],
  templateUrl: './room-amenities.component.html',
  styleUrl: './room-amenities.component.scss'
})
export class RoomAmenitiesComponent {
  unit: string = "m";
  amenities = [
    {
      title: "Top Amenities",
      list: [
        "Air conditioning",
        "Kitchenette",
        "Kitchen",
        "Balcony",
        "View"
      ]
    },
    {
      title: "Room Amenities",
      list: [
        "Childrens' cribs",
        "Clothes rack",
        "Drying rack for clothing",
        "Fold-up bed",
        "Sofa bed"
      ]
    },
    {
      title: "Bathroom",
      list: [
        "Toilet paper",
        "Bathtub",
        "Bidet",
        "Bathtub or shower"
      ]
    },
    {
      title: "Media & Technology",
      list: [
        "Game console - PS4",
        "Game console - Wii U",
        "Game console - Xbox One",
        "Computer"
      ]
    },
    {
      title: "Food & Drink",
      list:[
        "Dining area",
        "Dining table",
        "Wine glasses"
      ]
    }
  ]

  selectedAmenities: string[] = [];

  isSelected(value: string){
    return this.selectedAmenities.includes(value);
  }
}
