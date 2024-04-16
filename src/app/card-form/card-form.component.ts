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
  values: CardInfo = {
    name: '',
    class: '',
    description: '',
    cost: 0,
  }

  constructor(private cardService: CardValuesService) { }

  onSubmit(): void { this.cardService.updateValues(this.values) }
}
