import { Artist } from './artist';

export interface Album {
  _id: string;
  title: string;
  genre: string;
  albumArt: string;
  artist: Artist;
  link: string;
  status: {
    type: string,
    default: 'unverified'
  };

}
