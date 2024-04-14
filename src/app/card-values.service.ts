import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardValuesService {
  name: string = 'Card Name';
  class: string = 'Card Class';
  description: string = 'Card Description';

  constructor() { }

  updateValues(name: string, cardClass: string, description: string): void {
    this.name = name;
    this.class = cardClass;
    this.description = description;
  }
}
