import { TestBed } from '@angular/core/testing';

import { localStorageService } from './local-storage-service.service';

describe('localStorageServiceService', () => {
  let service: localStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(localStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
