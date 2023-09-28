interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Corre",
    details: {
        author: "Jorge Avila",
        year: 2023
    }
}


const { song:anotherSong, songDuration: duration, details} = audioPlayer;
const {author} = details;



const [, , vegeta = 'caca']: string = [] = ['Goku', 'Picoro','Bulma']

console.log('Personaje', vegeta);




// console.log('Song ', audioPlayer.song);
// console.log('author ', details);


















export {}