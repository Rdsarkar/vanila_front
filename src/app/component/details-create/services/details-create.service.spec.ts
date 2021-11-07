import { TestBed } from '@angular/core/testing';

import { DetailsCreateService } from './details-create.service';

describe('DetailsCreateService', () => {
  let service: DetailsCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
