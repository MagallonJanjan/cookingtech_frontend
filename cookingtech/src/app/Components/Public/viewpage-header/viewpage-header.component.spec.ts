import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpageHeaderComponent } from './viewpage-header.component';

describe('ViewpageHeaderComponent', () => {
  let component: ViewpageHeaderComponent;
  let fixture: ComponentFixture<ViewpageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
