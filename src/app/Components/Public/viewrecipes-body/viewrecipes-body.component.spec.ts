import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecipesBodyComponent } from './viewrecipes-body.component';

describe('ViewrecipesBodyComponent', () => {
  let component: ViewrecipesBodyComponent;
  let fixture: ComponentFixture<ViewrecipesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrecipesBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrecipesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
