import { TestBed } from '@angular/core/testing';

import { FaketodoService } from './faketodo.service';

describe('FaketodoService', () => {
  let service: FaketodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaketodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
