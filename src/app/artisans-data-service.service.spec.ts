import { TestBed } from '@angular/core/testing';

import { ArtisansDataServiceService } from './artisans-data-service.service';

describe('ArtisansDataServiceService', () => {
  let service: ArtisansDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisansDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
