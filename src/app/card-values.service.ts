import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardValuesService {
  name: string = 'Card Name';
  class: string = 'Card Class';
  description: string = 'Card Description';

  constructor() { }
}
