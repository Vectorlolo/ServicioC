import { TestBed } from '@angular/core/testing';

import { EstudianteServiceService } from './estudiante-service.service';

describe('EstudianteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstudianteServiceService = TestBed.get(EstudianteServiceService);
    expect(service).toBeTruthy();
  });
});
