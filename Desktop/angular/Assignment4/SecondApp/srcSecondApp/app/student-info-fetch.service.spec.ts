import { TestBed, inject } from '@angular/core/testing';

import { StudentInfoFetchService } from './student-info-fetch.service';

describe('StudentInfoFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentInfoFetchService]
    });
  });

  it('should be created', inject([StudentInfoFetchService], (service: StudentInfoFetchService) => {
    expect(service).toBeTruthy();
  }));
});
