import { TestBed } from '@angular/core/testing';

import { ServicesCocheService } from './services-coche.service';

describe('ServicesCocheService', () => {
  let service: ServicesCocheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesCocheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
