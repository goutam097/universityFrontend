import { TestBed } from '@angular/core/testing';

import { dataService } from './data-service.service';

describe('DataServiceService', () => {
  let service: dataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
