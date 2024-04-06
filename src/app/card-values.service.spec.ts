import { TestBed } from '@angular/core/testing';

import { CardValuesService } from './card-values.service';

describe('CardValuesService', () => {
  let service: CardValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
