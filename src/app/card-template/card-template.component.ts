import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardValuesService } from '../card-values.service';
import { CardInfo } from '../types/CardInfo';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-card-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})
export class CardTemplateComponent {
  @ViewChild('card') cardTemplate!: ElementRef;

  get cardValues(): CardInfo {
    return this.valuesService.cardValues;
  }

  constructor(private valuesService: CardValuesService) { }

  captureImage() {
    html2canvas(this.cardTemplate.nativeElement, { useCORS: true }).then(canvas => {
      // It still only works with some images
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'card_image.png';
      link.click();
    });
  }
}