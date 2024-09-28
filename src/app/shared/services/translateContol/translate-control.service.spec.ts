import { TestBed } from '@angular/core/testing';

import { TranslateControlService } from './translate-control.service';

describe('TranslateControlService', () => {
  let service: TranslateControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
