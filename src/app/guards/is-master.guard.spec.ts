import { TestBed } from '@angular/core/testing';

import { IsMasterGuard } from './is-master.guard';

describe('IsMasterGuard', () => {
  let guard: IsMasterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsMasterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
