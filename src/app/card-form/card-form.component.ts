import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CardValuesService } from '../card-values.service';
import { CardInfo } from '../types/CardInfo';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  name: string = '';
  class: string = '';
  description: string = '';
  cost: number = 0;

  get values(): CardInfo {
    return {
      name: this.name,
      class: this.class,
      description: this.description,
      cost: this.cost
    }
  }

  constructor(private cardService: CardValuesService) { }

  onSubmit(): void { this.cardService.updateValues(this.values) }
}
