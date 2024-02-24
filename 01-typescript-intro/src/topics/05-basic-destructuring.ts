interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}
interface Details{
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'taboo',
  details: {
    author: 'don Omar',
    year:2020
  }
}

// const song = "New song";

// const {song:anotherSong,songDuration:duration,details} = audioPlayer;

// const {author} = details;

const [p1,p2,Trunks = 'Not found']: string[] =['Goku','Vegueta'];

console.log('Personaje 3',Trunks); 
// console.log('Song:', song);
// console.log('duration:', duration);
// console.log('Song:', anotherSong);
// console.log('autor:', author);

export{};