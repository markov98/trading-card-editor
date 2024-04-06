import { Component } from '@angular/core';
import { CardValuesService } from '../card-values.service';

@Component({
  selector: 'app-card-template',
  standalone: true,
  imports: [],
  templateUrl: './card-template.component.html',
  styleUrl: './card-template.component.css'
})
export class CardTemplateComponent {

  get cardValues() {
    return {
      name: this.valuesService.name,
      class: this.valuesService.class,
      description: this.valuesService.description,
    }
  }

  constructor (private valuesService: CardValuesService) { }
}
