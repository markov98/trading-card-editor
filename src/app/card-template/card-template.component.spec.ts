import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTemplateComponent } from './card-template.component';

describe('CardTemplateComponent', () => {
  let component: CardTemplateComponent;
  let fixture: ComponentFixture<CardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain card values', () => {
    expect(component.cardValues).toBeTruthy();
  });

  it('should contain h2 with cardValues.name', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const cardTitle = bannerElement.querySelector('h2')!;
    expect(cardTitle.textContent).toEqual(component.cardValues.name);
  });
});
