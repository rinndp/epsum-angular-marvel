import { TestBed } from '@angular/core/testing';

import { GetFavouritesService } from './get-favourites.service';

describe('GetFavouritesService', () => {
  let service: GetFavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
