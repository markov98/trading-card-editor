import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardValuesService } from '../card-values.service';
import { CardInfo } from '../types/CardInfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  values: CardInfo = {
    name: '',
    class: '',
    description: '',
    cost: 0,
    imgUrl: '',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    battleStats: {
      attack: 0,
      defense: 0
    }
  }

  addBattleStats: boolean = true;

  constructor(private cardService: CardValuesService) { }

  onSubmit(): void {
    const valuesForSubmission: CardInfo = JSON.parse(JSON.stringify(this.values));
    if (!this.addBattleStats) { valuesForSubmission.battleStats = null };
    this.cardService.updateValues(valuesForSubmission)
   }
}
