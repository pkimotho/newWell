import { TestBed } from '@angular/core/testing';

import { MusicSalesService } from './music-sales.service';

describe('MusicSalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicSalesService = TestBed.get(MusicSalesService);
    expect(service).toBeTruthy();
  });
});
