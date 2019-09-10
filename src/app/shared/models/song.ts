import { Artist } from './artist';
import { Album } from './album';
import { Platform } from './platforms';
import { Producer } from './producer';

export interface Song {
  _id: string;
  title: string;
  genre: string;
  albumArt: string;
  audioFile: string;
  artist: Artist;
  link: string;
  status: string;
  album: Album;
  platforms: Platform[];
  artistNames: [string];
  lyricsLanguage: string;
  lyrics: string;
  producer: Producer[];
  previouslyReleased: boolean;
  onRecordLabel: boolean;
}
