import { TestBed } from '@angular/core/testing';

import { DetailListService } from './detail-list.service';

describe('DetailListService', () => {
  let service: DetailListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
