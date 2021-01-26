import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpageBodyComponent } from './viewpage-body.component';

describe('ViewpageBodyComponent', () => {
  let component: ViewpageBodyComponent;
  let fixture: ComponentFixture<ViewpageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpageBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
