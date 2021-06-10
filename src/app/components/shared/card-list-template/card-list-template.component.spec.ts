import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListTemplateComponent } from './card-list-template.component';

describe('CardListTemplateComponent', () => {
  let component: CardListTemplateComponent;
  let fixture: ComponentFixture<CardListTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
