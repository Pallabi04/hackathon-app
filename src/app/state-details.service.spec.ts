import { TestBed, inject } from '@angular/core/testing';

import { StateDetailsService } from './state-details.service';

describe('StateDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateDetailsService]
    });
  });

  it('should be created', inject([StateDetailsService], (service: StateDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
