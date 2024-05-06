import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTemplateComponent } from './card-template.component';

describe('CardTemplateComponent', () => {
  let component: CardTemplateComponent;
  let fixture: ComponentFixture<CardTemplateComponent>;
  let bannerElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bannerElement  = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain card values', () => {
    expect(component.cardValues).toBeTruthy();
  });

  it('should contain h2 with cardValues.name', () => {
    const cardTitle = bannerElement.querySelector('h2')!;
    expect(cardTitle.textContent).toEqual(component.cardValues.name);
  });

  it('should contain p with cardValues.class', () => {
    const cardClass = bannerElement.querySelector('.card-class')!;
    expect(cardClass.textContent).toEqual(component.cardValues.class);
  });

  it('should contain p with cardValues.description', () => {
    const cardDescription = bannerElement.querySelector('.card-desc')!;
    expect(cardDescription.textContent).toEqual(component.cardValues.description);
  });
});
