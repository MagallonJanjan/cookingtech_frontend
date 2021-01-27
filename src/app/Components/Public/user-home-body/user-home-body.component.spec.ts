import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeBodyComponent } from './user-home-body.component';

describe('UserHomeBodyComponent', () => {
  let component: UserHomeBodyComponent;
  let fixture: ComponentFixture<UserHomeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
