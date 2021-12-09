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
    name: 'Non-Ideal I-V Effects',
    duration: 2187,
    sources: [{
      src: 'https://www.youtube.com/embed/1zu4TLx1Pzw',
      type: 'video/youtube',

    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter4/Non-Ideal Effects.vtt' },
    poster: './assets/Poster/Chapeter4/Non-Ideal Effects.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter4/Non-Ideal Effects.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter4/Non-Ideal Effects.jpg'
    }],
  }, {

    name: 'Non-Ideal characteristics of MOSFET-1',
    duration: 986,
    sources: [{
      src: 'https://www.youtube.com/embed/5r-vANPgTXE',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter4/Non-Ideal characteristics of MOSFET.vtt' },
    poster: './assets/Poster/Chapeter4/Non-Ideal characteristics of MOSFET.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter4/Non-Ideal characteristics of MOSFET.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter4/Non-Ideal characteristics of MOSFET.jpg'
    }]
  }, {
    name: 'Non-Ideal characteristics of MOSFET-2',
    duration: 2478,
    sources: [{
      src: 'https://www.youtube.com/embed/vfnhslZVpfU',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter4/Non-Ideal characteristics of MOSFET-2.vtt' },
    poster: './assets/Poster/Chapeter4/Non-Ideal characteristics of MOSFET-2.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter4/Non-Ideal characteristics of MOSFET-2.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter4/Non-Ideal characteristics of MOSFET-2.jpg'
    }]
  }, {
    name: 'Non-Ideal characteristics of MOSFET-3',
    duration: 2848,
    sources: [{
      src: 'https://www.youtube.com/embed/VwHgCFguCgw',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter4/Non-Ideal characteristics of MOSFET-3.vtt' },
    poster: './assets/Poster/Chapeter4/Non-Ideal characteristics of MOSFET-3.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter4/Non-Ideal characteristics of MOSFET-3.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter4/Non-Ideal characteristics of MOSFET-3.jpg'
    }]

  }, {
    name: 'Non-Ideal characteristics of MOSFET-4',
    duration: 2129,
    sources: [{
      src: 'https://www.youtube.com/embed/NnF47jZyQb8',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter4/Non-Ideal characteristics of MOSFET-4.vtt' },
    poster: './assets/Poster/Chapeter4/Non-Ideal characteristics of MOSFET-4.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter4/Non-Ideal characteristics of MOSFET-4.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter4/Non-Ideal characteristics of MOSFET-4.jpg'
    }]
  }, {
    name: 'Non ideal Effects',
    duration: 3438,
    sources: [{
      src: 'https://www.youtube.com/embed/-VwaGntBI-U',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter4/Non ideal Effects.vtt' },
    poster: './assets/Poster/Chapeter4/Non ideal Effects.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter4/Non ideal Effects.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter4/Non ideal Effects.jpg'
    }]
  }, {
    name: 'XNOR Gate',
    duration: 381,
    sources: [{
      src: 'https://www.youtube.com/embed/NNCJ74lyGEo',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter4/XNOR Gate.vtt' },
    poster: './assets/Poster/Chapeter4/XNOR Gate.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter4/XNOR Gate.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter4/XNOR Gate.jpg'
    }]

  }, {
    name: 'CMOS Logic Gates',
    duration: 350,
    sources: [{
      src: 'https://www.youtube.com/embed/hmpVrjm93n4',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter4/CMOS Logic Gates.vtt' },
    poster: './assets/Poster/Chapeter4/CMOS Logic Gates.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter4/CMOS Logic Gates.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter4/CMOS Logic Gates.jpg'
    }]

  }, {
    name: 'CMOS Introduction',
    duration: 690,
    sources: [{
      src: 'https://www.youtube.com/embed/-WJWiIiFu6Q',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter4/CMOS Introduction.vtt' },
    poster: './assets/Poster/Chapeter4/CMOS Introduction.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter4/CMOS Introduction.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter4/CMOS Introduction.jpg'
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



