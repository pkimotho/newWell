import { TestBed } from '@angular/core/testing';

import { ArtistSongsService } from './artist-songs.service';

describe('ArtistSongsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistSongsService = TestBed.get(ArtistSongsService);
    expect(service).toBeTruthy();
  });
});
