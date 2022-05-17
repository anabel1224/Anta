import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalRegistrarComponent } from './animal-registrar.component';

describe('AnimalRegistrarComponent', () => {
  let component: AnimalRegistrarComponent;
  let fixture: ComponentFixture<AnimalRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
