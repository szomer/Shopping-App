import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingMenComponent } from './clothing-men.component';

describe('ClothingMenComponent', () => {
  let component: ClothingMenComponent;
  let fixture: ComponentFixture<ClothingMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothingMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
