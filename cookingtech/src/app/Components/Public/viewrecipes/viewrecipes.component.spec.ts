import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecipesComponent } from './viewrecipes.component';

describe('ViewrecipesComponent', () => {
  let component: ViewrecipesComponent;
  let fixture: ComponentFixture<ViewrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
