import { TestBed, inject } from '@angular/core/testing';

import { MetService } from './met.service';

describe('MetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetService]
    });
  });

  it('should be created', inject([MetService], (service: MetService) => {
    expect(service).toBeTruthy();
  }));
});
