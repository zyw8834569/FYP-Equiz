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
    name: 'Mosfet Dc Characterization',
    duration: 823,
    sources: [{
      src: 'https://www.youtube.com/embed/W80SJ8QNL_g',
      type: 'video/youtube',

    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter2/MOSFET DC Characterization.vtt' },
    poster: './assets/Poster/Chapeter2/Mosfet.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter2/Mosfet.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter2/Mosfet.jpg'
    }],
  }, {

    name: 'Circuit Basics Learning Circuit',
    duration: 398,
    sources: [{
      src: 'https://www.youtube.com/embed/iZYedWOERN0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter2/Circuit Basics Learning Circuit.vtt' },
    poster: './assets/Poster/Chapeter2/Circuit Basics Learning Circuit.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter2/Circuit Basics Learning Circuit.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter2/Circuit Basics Learning Circuit.jpg'
    }]
  }, {
    name: 'What is a CMOS',
    duration: 474,
    sources: [{
      src: 'https://www.youtube.com/embed/docgmTprR5o',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter2/What is a CMOS.vtt' },
    poster: './assets/Poster/Chapeter2/What is a CMOS.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter2/What is a CMOS.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter2/What is a CMOS.jpg'
    }]
  }, {
    name: 'What is Field Effect Transistor',
    duration: 781,
    sources: [{
      src: 'https://www.youtube.com/embed/3Ny3wzw0ke0',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter2/What is Field Effect Transistor.vtt' },
    poster: './assets/Poster/Chapeter2/What is Field Effect Transistor.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter2/What is Field Effect Transistor.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter2/What is Field Effect Transistor.jpg'
    }]
  }, {
    name: 'MOSFETs explained',
    duration: 716,
    sources: [{
      src: 'https://www.youtube.com/embed/ymFfw_MGceI',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter2/MOSFETs explained.vtt' },
    poster: './assets/Poster/Chapeter2/MOSFETs explained.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter2/MOSFETs explained.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter2/MOSFETs explained.jpg'
    }]
  }, {
    name: 'Building logic gates from MOSFET transistors',
    duration: 649,
    sources: [{
      src: 'https://www.youtube.com/embed/1rZyGL1K5QI',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter2/Building logic gates.vtt' },
    poster: './assets/Poster/Chapeter2/Building logic gates from MOSFET transistors.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter2/Building logic gates from MOSFET transistors.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter2/Building logic gates from MOSFET transistors.jpg'
    }]
  }, {
    name: 'Thevenin Theorem',
    duration: 563,
    sources: [{
      src: 'https://www.youtube.com/embed/zTDgziJC-q8',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter2/Thevenin Theorem.vtt' },
    poster: './assets/Poster/Chapeter2/Thevenin Theorem.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter2/Thevenin Theorem.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter2/Thevenin Theorem.jpg'
    }]

  }, {
    name: 'Superposition Theorem',
    duration: 507,
    sources: [{
      src: 'https://www.youtube.com/embed/ZJ8zD8m-B1Q',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter2/Superposition Theorem.vtt' },
    poster: './assets/Poster/Chapeter2/Superposition Theorem.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter2/Superposition Theorem.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter2/Superposition Theorem.jpg'
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



