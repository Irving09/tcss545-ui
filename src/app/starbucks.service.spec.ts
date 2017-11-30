import { TestBed, inject } from '@angular/core/testing';

import { StarbucksService } from './starbucks.service';

describe('StarbucksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarbucksService]
    });
  });

  it('should be created', inject([StarbucksService], (service: StarbucksService) => {
    expect(service).toBeTruthy();
  }));
});
