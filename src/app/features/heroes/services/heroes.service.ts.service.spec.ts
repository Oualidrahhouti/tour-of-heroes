import { TestBed } from '@angular/core/testing';

import { HeroesServiceTsService } from './heroes.service.ts.service';

describe('HeroesServiceTsService', () => {
  let service: HeroesServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
