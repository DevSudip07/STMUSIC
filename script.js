var arr = [
  {
    songName: "Sajni re",
    url: "./song/Sajni.mp3",
    img: "./img/SAJNI.jpg",
    time: "3:00"
  },
  {
    songName: "Pehli bhi mein",
    url: "./song/Pehle Bhi Main.mp3",
    img: "./img/ANIMAL.jpg",
    time: "3:10"
  },
  {
    songName: "Ki Honda Pyaar",
    url: "./song/Ki Honda Pyaar.mp3",
    img: "./img/Ki-Honda-Pyar.jpg",
    time: "2:01"
  },
  {
    songName: "Mehrama",
    url: "./song/Mehrama.mp3",
    img: "./img/Mehrama.jpg",
    time: "4:10"
  },
  {
    songName: "Jeena Sikha De",
    url: "./song/JEENA_SIKHA_DE.mp3",
    img: "./img/Srikanth.jpg",
    time: "2:10"
  },
  {
    songName: "DARMIYAAN",
    url: "./song/DARMIYAAN.mp3",
    img: "./img/DARMIYAAN.jpg",
    time: "2:10"
  },
  {
    songName: "Mujhe Kaise, Pata Na Chala",
    url: "./song/Mujhe_Kaise,_Pata_Na_Chala.mp3",
    img: "./img/Mujhe_Kaise,_Pata_Na_Chala.jpg",
    time: "2:10"
  },
  {
    songName: "Kuch To Hai",
    url: "./song/Kuch_To_Hai.mp3",
    img: "./img/Kuch_To_Hai.jpg",
    time: "2:10"
  },
];

var songList = document.querySelector(".song-list");
var poster = document.querySelector(".song-banner");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");




var audio = new Audio();

var selectedSong = 0;

function mainFunction() {
  var clutter = "";

  arr.forEach(function (elem, index) {
    clutter += `<div class="song" id=${index}>
                    <div class="title">
                        <img src=${elem.img} alt="">
                        <h2>${elem.songName}</h2>
                    </div>
                    <h3>${elem.time}</h3>
                </div>`;
  });
  songList.innerHTML = clutter;

  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

mainFunction();

songList.addEventListener("click", function (dets) {
  selectedSong = dets.target.id
  play.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`
  mainFunction();
  audio.play();
});

var flag = 0;
play.addEventListener("click", function(){
    if(flag == 0){
        play.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`
        mainFunction()
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="fa-solid fa-circle-play"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        play.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`
        mainFunction()
        audio.play()
    } else{
        forward.style.opacity = 0.3;
        audio.pause()
    }
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--
        play.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`
        mainFunction()
        audio.play()
    } else{
        backward.style.opacity = 0.3;
        audio.pause()
    }
})

audio.addEventListener("ended", function(){
  if(selectedSong < arr.length - 1){
      selectedSong++
      play.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`
      mainFunction()
      audio.play()
  } else{
      forward.style.opacity = 0.3;
      audio.pause()
  }
})
// function playNextSong() {
//   selectedSong = (selectedSong + 1) % arr.length;
//   audio.src = arr[selectedSong].url;
//   audio.load();
//   audio.play();
//   mainFunction();
// }

// audio.addEventListener('ended', playNextSong);