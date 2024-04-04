import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardTemplateComponent } from './card-template/card-template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trading-card-editor';
}
