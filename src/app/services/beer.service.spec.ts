import { TestBed } from '@angular/core/testing';

import { BeerClient } from './beer.service';

describe('BeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerClient = TestBed.get(BeerClient);
    expect(service).toBeTruthy();
  });
});
