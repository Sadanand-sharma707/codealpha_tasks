let songName=document.querySelector("#song-name");
let songSinger=document.querySelector("#song-singer");
let songImage=document.querySelector(".song-image");
let playPauseImg=document.querySelector("#play-pause");
let volumeRange=document.querySelector("#valume-range");
let volImg=document.querySelector("#volumeImg");
let songRang=document.querySelector("#song-duration");
let Animation=document.querySelector("#musicAni");
let playlistImg=document.querySelector("#playlist-img");
let playlist=document.querySelector(".playlist");
let playlistSong=document.querySelectorAll(".playlist-song");

let index=0;
let playingSong=false;
let track =document.createElement("audio");
let songs=[
    {
        name:"aa likhu tu aa jaaye ",
        Path:"firstsong.mp3",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXutVRNQ3ZJLiY1Cr_CtPDNIzSFoEtieihw&s",
        singer:"Arjit Singh"
    }, 
    {
        name:"mai bhi hu tu bhi hai",
        Path:"secondsong.mp3",
        image:"images.jpg",
        singer:"Arjit Singh"
    },
    {
        name:"o jalimaa",
        Path:"thirdsong.mp3",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHWBkGV5Vwp6tHc8Ad96Bj_X030vDkVDtYQ&s",
        singer:"Arjit Singh"
    },
    {
        name:"tere sangh yaara",
        Path:"fourthsong.mp3",
        image:"musicIcon.jpg",
        singer:"Arjit Singh"
    },
    {
        name:"07",
        Path:"fivethsong.mp3",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6PkaYZGFEzK9-YtL4DOulENbIBS0Hqp4Yg&s",
        singer:"Arjit Singh"
    },
    {
        name:"08",
        Path:"sixthsong.mp3",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnEOQh6uJG4VbZejllnhzJ69urElx4ybUSQ&s",
        singer:"Arjit Singh"
    },
    {
        name:"ye mausam ki barish",
        Path:"seventhsong.mp3",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5N6O-0NYXsGfW2ywytMLted25mfsVsmCDiA&s",
        singer:"Arjit Singh"
    },
    {
        name:"06",
        Path:"eightsong.mp3",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXx9g-KK1e6JQNk_qt_1lpklR4Bsdtm1f0Fw&s",
        singer:"Arjit Singh"
    }
]

function loadTrack(index){
    track.src=songs[index].Path;
    songName.innerHTML=songs[index].name;
    songSinger.innerHTML=songs[index].singer;
    songImage.style=`background-image: url("${songs[index].image}");`
    volume();
    durantion();
    setInterval(()=>{
        songRang.max=track.duration;
        songRang.value=track.currentTime;
    },1000);
    track.loop=true;
    track.load();
}
loadTrack(index);

function playPause(){
    if(playingSong==false){
          playSong();
          Animation.style.display="block";
    }
    else{
        pauseSong();
        Animation.style.display="none";
    }
}
function playSong(){
   track.play();
    playingSong=true;
    playPauseImg.src="pause.svg";
}

function pauseSong(){
    track.pause();
    playingSong=false;
    playPauseImg.src="play.svg";
}

function nextSong(){
  if(index<songs.length-1){
    index++;
    loadTrack(index);
    playSong();
  }
  else{
    index=0;
    loadTrack(index);
    playSong();
  }
}
//this function use when user press previous btn then song come back
function previousSong(){
    if(index>0){
        index--;
        loadTrack(index);
        playSong();

    }
    else{
        index=songs.length-1;
        loadTrack(index);
        playSong();
    }
}
//volume image change like mute when volume value zero
function volume(){
  track.volume=volumeRange.value/100;
  if(volumeRange.value==0){
    volImg.src="muteImg.svg";
  }
  else{
    volImg.src="valume.svg";
  }
}

function durantion(){
    track.currentTime=songRang.value;
}

playlistImg.addEventListener("click",()=>{
    playlist.classList.toggle("playlist-active");

})
playlistSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        loadTrack(index);
        playSong();
        playlist.classList.remove("playlist-active");
    })
})
