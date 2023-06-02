import { TestBed } from '@angular/core/testing';

import { staticStorageService } from './static-storage-service.service';

describe('StaticStorageServiceService', () => {
  let service: staticStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(staticStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
