import { TestBed } from '@angular/core/testing';

import { CustomvalidationService } from './apirequest.service';

describe('CustomvalidationService', () => {
  let service: CustomvalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomvalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
