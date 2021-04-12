import { TestBed } from '@angular/core/testing';

import { TimeMeTrackService } from './time-me-track.service';

describe('TimeMeTrackService', () => {
  let service: TimeMeTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeMeTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
