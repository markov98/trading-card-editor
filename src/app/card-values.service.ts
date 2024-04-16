import { Injectable } from '@angular/core';
import { CardInfo } from './types/CardInfo';

@Injectable({
  providedIn: 'root'
})
export class CardValuesService {
  cardValues: CardInfo = {
    name: 'Card Name',
    class: 'Card Class',
    description: 'Card Description',
    cost: 0
  }

  constructor() { }

  updateValues(newValues: CardInfo): void {
    this.cardValues = newValues;
  }
}
