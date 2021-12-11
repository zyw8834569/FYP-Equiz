var options = {
  techOrder: ["html5", "youtube"],
  "youtube": { "cc_load_policy": 0, "modestbranding": 1, "iv_load_policy": 3, "disablekb": 0 },
  html5: {
    hls: {
      overrideNative: true
    },
    nativeAudioTracks: false,
    nativeVideoTracks: false,
  },
  controls: true,
  autoplay: false,
  preload: 'auto',
  playbackRates: [0.75, 1, 1.25, 1.5],
  fluid: true,
  controlBar: {
    'volumePanel': {
      inline: false
    },
    children: [
      'playToggle',
      'volumePanel',
      'currentTimeDisplay',
      'durationDisplay',
      'progressControl',
      'remainingTimeDisplay',
      'playbackRateMenuButton',
      'subsCapsButton',
      'pictureInPictureToggle',
      'fullscreenToggle'

    ],
    'pictureInPictureToggle': disablePicture()
  }
}
// disable picture in picture in chrome on mobile devices
function disablePicture() {
  var na = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(na)) {
    return false;
  } else {
    return true;
  }
}
var player = videojs('my-video', options);
player.aspectRatio('16:9')
player.fill(true);
player.fluid(true);


var playlist =
  [{
    name: 'Design rules of MOS and BICMOS circuits',
    duration: 274,
    sources: [{
      src: 'https://www.youtube.com/embed/socMrB5tevg',
      type: 'video/youtube',

    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter7/Design rules of MOS and BICMOS circuits.vtt' },
    poster: './assets/Poster/Chapeter7/Design rules of MOS and BICMOS circuits.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter7/Design rules of MOS and BICMOS circuits.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter7/Design rules of MOS and BICMOS circuits.jpg'
    }],
  }, {

    name: 'Design & Simulation of BiCMOS inverter',
    duration: 560,
    sources: [{
      src: 'https://www.youtube.com/embed/cOYsiQ1yYhQ',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter7/Design & Simulation of BiCMOS inverter.vtt' },
    poster: './assets/Poster/Chapeter7/Design & Simulation of BiCMOS inverter.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter7/Design & Simulation of BiCMOS inverter.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter7/Design & Simulation of BiCMOS inverter.jpg'
    }]
  }, {
    name: 'CMOS Half Adder Design',
    duration: 701,
    sources: [{
      src: 'https://www.youtube.com/embed/qEotuIPO8Ek',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter7/CMOS Half Adder Design.vtt' },
    poster: './assets/Poster/Chapeter7/CMOS Half Adder Design.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter7/CMOS Half Adder Design.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter7/CMOS Half Adder Design.jpg'
    }]
  }, {
    name: 'CMOS Design of Full Adder',
    duration: 744,
    sources: [{
      src: 'https://www.youtube.com/embed/p4jgNRjwluA',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter7/CMOS Design of Full Adder.vtt' },
    poster: './assets/Poster/Chapeter7/CMOS Design of Full Adder.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter7/CMOS Design of Full Adder.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter7/CMOS Design of Full Adder.jpg'
    }]

  }, {
    name: 'Designing Combinational Logic Circuits using MOSFET',
    duration: 1050,
    sources: [{
      src: 'https://www.youtube.com/embed/D1PdTZiPJ2U',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter7/Designing Combinational Logic Circuits using MOSFET.vtt' },
    poster: './assets/Poster/Chapeter7/Designing Combinational Logic Circuits using MOSFET.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter7/Designing Combinational Logic Circuits using MOSFET.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter7/Designing Combinational Logic Circuits using MOSFET.jpg'
    }]
  }, {
    name: 'Static & Dynamic CMOS Circuit Design',
    duration: 1381,
    sources: [{
      src: 'https://www.youtube.com/embed/0SVmwZdswoM',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter7/Static & Dynamic CMOS Circuit Design.vtt' },
    poster: './assets/Poster/Chapeter7/Static & Dynamic CMOS Circuit Design.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter7/Static & Dynamic CMOS Circuit Design.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter7/Static & Dynamic CMOS Circuit Design.jpg'
    }]
  }, {
    name: 'Dynamic CMOS Design',
    duration: 1194,
    sources: [{
      src: 'https://www.youtube.com/embed/sWI-EvGa294',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter7/Dynamic CMOS Design.vtt' },
    poster: './assets/Poster/Chapeter7/Dynamic CMOS Design.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter7/Dynamic CMOS Design.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter7/Dynamic CMOS Design.jpg'
    }]

  }

  ];
player.on('playlistitem', function (event, video) {
  player.overlay({
    overlays: video.overlays
  });
});

player.playlist(playlist);
player.playlist.autoadvance(7);
player.playlistUi();


function horizontal() {
  let w = window.outerWidth;
  let h = window.outerHeight;
  for (let i = 0; i < 10; i++) {
    if (w < 768) {
      player.playlistUi({ horizontal: true });
    } else {
      document.getElementById('playlist').classList.remove('vjs-playlist-horizontal')
    }
  }
}



player.seekButtons({
  forward: 10,
  back: 10
});

// Disable the quiz button until it is the last video

const button = document.getElementById('quiz-btn');
const link = document.getElementById('link');
function showAlert() {
  if (player.playlist.currentIndex() !== player.playlist.lastIndex()) {
    link.removeAttribute("href");
    button.disabled = true;
    alert("Please finish all the video before proceeding to the quiz");
  }
  player.on('ended', function () {
    if (player.playlist.currentIndex() !== player.playlist.lastIndex()) {
      link.removeAttribute("href");
      button.disabled = true;
    } else if (player.playlist.currentIndex() == player.playlist.lastIndex()) {
      link.href = "quiz/Chaper1quiz.html"
      button.disabled = false;
    }
  })
}



