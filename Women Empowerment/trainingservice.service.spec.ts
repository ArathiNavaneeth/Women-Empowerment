import { TestBed } from '@angular/core/testing';

import { TrainingService } from './trainingservice.service';

describe('TrainingserviceService', () => {
  let service: TrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
