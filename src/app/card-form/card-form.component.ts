import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CardValuesService } from '../card-values.service';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  constructor(private cardService: CardValuesService) { }

  onSubmit(form: NgForm): void { }
}
