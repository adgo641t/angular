import { TestBed } from '@angular/core/testing';

import { ZapatillaServiceService } from './zapatilla-service.service';

describe('ZapatillaServiceService', () => {
  let service: ZapatillaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZapatillaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
