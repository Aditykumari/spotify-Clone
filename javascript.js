let songIndex = 0;
let audioelement = new Audio();
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = document.getElementsByClassName("songItem");
let songs=[
    {
        name:"Mann-mera",
        path:"Mann mera.mp3"
    },
    {
        name:"Mitwa",
        path:"mitwa-.mp3" 
    },
    {
        name:"Sultan",
        path:"Sultan-Title song.mp3"
    },
    {
        name:"Hamari Adhuri Kahani",
        path:"hamari-Adhuri-Kahani.mp3"
    },
    {
        name:"Main Agar Kahoon",
        path:"mai-agar-kahoon.mp3"
    },
    {
        name:"Teri-Meri",
        path:"teri-meri.mp3"
    },
    {
        name:"Samjhanwan",
        path:"samjhawa.mp3"
    },
    {
        name:"Sheela-ki-jawani",
        path:"sheela.mp3"
    },
    {
        name:"Maine tera naam dil rakh diya",
        path:"Dil.mp3"
    },
    {
        name:"LoveDose",
        path:"love-dose.mp3"
    }
    
    ];
    
    
    

// Function to load a song
const loadSong = (song) => {
  audioelement.src = song.path;
  audioelement.currentTime = 0;
  audioelement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
};

// Function to initialize the playlist
const initializePlaylist = () => {
  for (let i = 0; i < songItems.length; i++) {
    const songItem = songItems[i];
    const song = songs[i];

    songItem.addEventListener("click", () => {
      songIndex = i;
      loadSong(song);
      updateSongInfo(song);
      makeAllPlays();
      songItem
        .querySelector(".songItemPlay")
        .classList.replace("fa-circle-play", "fa-circle-pause");
    });
  }
};

// Function to update the song information
const updateSongInfo = (song) => {
  document.querySelector(".songName").textContent = song.name;
  document.querySelector(".timestamp").textContent = song.duration;
  document.querySelector(".songItemContainer img").src = song.image;
};

// Function to play or pause the song
const togglePlay = () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
};

// Function to make all play icons appear as play
const makeAllPlays = () => {
  const playIcons = document.getElementsByClassName("songItemPlay");
  for (let i = 0; i < playIcons.length; i++) {
    const playIcon = playIcons[i];
    playIcon.classList.remove("fa-circle-pause");
    playIcon.classList.add("fa-circle-play");
  }
};

// Event listener for masterPlay button
masterPlay.addEventListener("click", togglePlay);

// Event listener for progress bar
myProgressBar.addEventListener("input", () => {
  const progress = myProgressBar.value;
  audioelement.currentTime = (progress * audioelement.duration) / 100;
});

// Event listener for audio time update
audioelement.addEventListener("timeupdate", () => {
  const progress = (audioelement.currentTime / audioelement.duration) * 100;
  myProgressBar.value = progress;
});

// Initialize the playlist
initializePlaylist();
