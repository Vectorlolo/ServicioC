import { TestBed } from '@angular/core/testing';

import { DecanoService } from './decano.service';

describe('DecanoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecanoService = TestBed.get(DecanoService);
    expect(service).toBeTruthy();
  });
});
