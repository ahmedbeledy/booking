import { TestBed } from '@angular/core/testing';

import { HomeLookupService } from './home-lookup.service';

describe('HomeLookupService', () => {
  let service: HomeLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
