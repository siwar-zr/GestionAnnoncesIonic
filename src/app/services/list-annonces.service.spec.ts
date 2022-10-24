import { TestBed } from '@angular/core/testing';

import { ListAnnoncesService } from './list-annonces.service';

describe('ListAnnoncesService', () => {
  let service: ListAnnoncesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAnnoncesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
