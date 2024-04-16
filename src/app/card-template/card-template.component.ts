import { Component } from '@angular/core';
import { CardValuesService } from '../card-values.service';
import { CardInfo } from '../types/CardInfo';

@Component({
  selector: 'app-card-template',
  standalone: true,
  imports: [],
  templateUrl: './card-template.component.html',
  styleUrl: './card-template.component.css'
})
export class CardTemplateComponent {

  get values(): CardInfo {
    return this.valuesService.cardValues;
  }

  constructor (private valuesService: CardValuesService) { }
}
