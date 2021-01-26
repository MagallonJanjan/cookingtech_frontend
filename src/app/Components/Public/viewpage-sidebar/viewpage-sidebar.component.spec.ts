import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpageSidebarComponent } from './viewpage-sidebar.component';

describe('ViewpageSidebarComponent', () => {
  let component: ViewpageSidebarComponent;
  let fixture: ComponentFixture<ViewpageSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpageSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
