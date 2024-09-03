//you're developing a playlist feature for a music streaming app.

//user can add and remove songs to their playlists

//you have tto implement features that allow th user to delete a song

//move a song up or down the playlist, and insert a song at a particular index

const playlist = [
  {
    id: 1,
    title: "On My Way",
    artist: "Alan Walker ft.Sabrina Carpenter",
  },
  {
    id: 2,
    title: "Stay",
    artist: "Kid Laroi ft.Justin Beiber",
  },
  {
    id: 3,
    title: "Dusk Till Dawn",
    artist: "Zayn ft.Sia",
  },
];

// const songIndexToRemove = playlist.findIndex((song) => {
//     return song.id === 1;
// })

//Remove Song of id 1
// if(songIndexToRemove !== -1){
//     playlist.splice(songIndexToRemove, 1)
// }

//Move a song of id 1 from index 1 to index 3
const songIndexToMove = playlist.findIndex(song => song.id === 1);
if(songIndexToMove !== -1){
    const [songToMoveObj] = playlist.splice(songIndexToMove, 1);
    playlist.splice(2, 0, songToMoveObj)
}
console.log(playlist);

//Adding new
const newSong = {
    id:4,
    title:"See You Again",
    artist: "Wiz Khalifa ft.Charlie Puth"
}
playlist.splice(playlist.length, 0, newSong)
console.log(playlist);