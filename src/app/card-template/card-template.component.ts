import { Component } from '@angular/core';
import { CardValuesService } from '../card-values.service';
import { CardInfo } from '../types/CardInfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-template.component.html',
  styleUrl: './card-template.component.css'
})
export class CardTemplateComponent {

  get cardValues(): CardInfo {
    return this.valuesService.cardValues;
  }

  constructor (private valuesService: CardValuesService) { }
}
