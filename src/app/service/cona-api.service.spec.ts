import { TestBed } from '@angular/core/testing';

import { ConaApiService } from './cona-api.service';

describe('ConaApiService', () => {
  let service: ConaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
