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
    name: 'Introduction to CMOS low power design',
    duration: 1334,
    sources: [{
      src: 'https://www.youtube.com/embed/KuwNZIWRrkE',
      type: 'video/youtube',

    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter6/Introduction to CMOS low power design.vtt' },
    poster: './assets/Poster/Chapeter6/Introduction to CMOS low power design.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter6/Introduction to CMOS low power design.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter6/Introduction to CMOS low power design.jpg'
    }],
  }, {

    name: 'Power Dissipation in CMOS Circuits',
    duration: 470,
    sources: [{
      src: 'https://www.youtube.com/embed/yn5KlSuq8uw',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter6/Power Dissipation in CMOS Circuits.vtt' },
    poster: './assets/Poster/Chapeter6/Power Dissipation in CMOS Circuits.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter6/Power Dissipation in CMOS Circuits.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter6/Power Dissipation in CMOS Circuits.jpg'
    }]
  }, {
    name: 'Sequential Logic',
    duration: 1109,
    sources: [{
      src: 'https://www.youtube.com/embed/q52SvT_jBI0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter6/Sequential Logic.vtt' },
    poster: './assets/Poster/Chapeter6/Sequential Logic.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter6/Sequential Logic.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter6/Sequential Logic.jpg'
    }]
  }, {
    name: 'Sequential CMOS',
    duration: 727,
    sources: [{
      src: 'https://www.youtube.com/embed/pkWhtUQ5zf4',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter6/Sequential CMOS.vtt' },
    poster: './assets/Poster/Chapeter6/Sequential CMOS.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter6/Sequential CMOS.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter6/Sequential CMOS.jpg'
    }]

  }, {
    name: 'Low Power Design',
    duration: 1950,
    sources: [{
      src: 'https://www.youtube.com/embed/TFOO1JAll2Y',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter6/Low Power Design.vtt' },
    poster: './assets/Poster/Chapeter6/Low Power Design.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter6/Low Power Design.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter6/Low Power Design.jpg'
    }]
  }, {
    name: 'CMOS - Low-Power',
    duration: 854,
    sources: [{
      src: 'https://www.youtube.com/embed/BcCbO_N7lJg',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter6/CMOS - Low-Power.vtt' },
    poster: './assets/Poster/Chapeter6/CMOS - Low-Power.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter6/CMOS - Low-Power.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter6/CMOS - Low-Power.jpg'
    }]
  }, {
    name: 'Sequential System',
    duration: 1766,
    sources: [{
      src: 'https://www.youtube.com/embed/QhmTTxcBkto',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter6/Sequential System.vtt' },
    poster: './assets/Poster/Chapeter6/Sequential System.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter6/Sequential System.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter6/Sequential System.jpg'
    }]

  }, {
    name: 'Introduction to Sequential Circuits',
    duration: 505,
    sources: [{
      src: 'https://www.youtube.com/embed/AaN72s5WfOM',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter6/Introduction to Sequential Circuits.vtt' },
    poster: './assets/Poster/Chapeter6/Introduction to Sequential Circuits.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter6/Introduction to Sequential Circuits.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter6/Introduction to Sequential Circuits.jpg'
    }]

  }, {
    name: 'CMOS Sequential Circuits',
    duration: 3674,
    sources: [{
      src: 'https://www.youtube.com/embed/Yo_ttSD6o-k',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter6/CMOS Sequential Circuits.vtt' },
    poster: './assets/Poster/Chapeter6/CMOS Sequential Circuits.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter6/CMOS Sequential Circuits.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter6/CMOS Sequential Circuits.jpg'
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



