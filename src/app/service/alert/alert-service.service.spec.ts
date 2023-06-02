import { TestBed } from '@angular/core/testing';

import { alertService } from './alert-service.service';

describe('AlertServiceService', () => {
  let service: alertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(alertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
