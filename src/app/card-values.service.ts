import { Injectable } from '@angular/core';
import { CardInfo } from './types/CardInfo';

@Injectable({
  providedIn: 'root'
})
export class CardValuesService {
  name: string = 'Card Name';
  class: string = 'Card Class';
  description: string = 'Card Description';
  cost: number = 0;

  constructor() { }

  updateValues(values: CardInfo): void {
    this.name = values.name;
    this.class = values.class;
    this.description = values.description;
    this.cost = values.cost;
  }
}
