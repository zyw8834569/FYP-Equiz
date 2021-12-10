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
    name: 'Dynamic CMOS Dis VS Adv',
    duration: 934,
    sources: [{
      src: 'https://www.youtube.com/embed/WqcK1e68e_s',
      type: 'video/youtube',

    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter5/Dynamic CMOS Dis VS Adv.vtt' },
    poster: './assets/Poster/Chapeter5/Dynamic CMOS Dis VS Adv.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter5/Dynamic CMOS Dis VS Adv.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter5/Dynamic CMOS Dis VS Adv.jpg'
    }],
  }, {

    name: 'Comparison of Static and Dynamic CMOS',
    duration: 986,
    sources: [{
      src: 'https://www.youtube.com/embed/QMT7Eox4JNg',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter5/Comparison of Static and Dynamic CMOS.vtt' },
    poster: './assets/Poster/Chapeter5/Comparison of Static and Dynamic CMOS.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter5/Comparison of Static and Dynamic CMOS.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter5/Comparison of Static and Dynamic CMOS.jpg'
    }]
  }, {
    name: 'Dynamic CMOS Logic Circuits',
    duration: 1410,
    sources: [{
      src: 'https://www.youtube.com/embed/9gsz6MlNpvg',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter5/Dynamic CMOS Logic Circuits.vtt' },
    poster: './assets/Poster/Chapeter5/Dynamic CMOS Logic Circuits.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter5/Dynamic CMOS Logic Circuits.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter5/Dynamic CMOS Logic Circuits.jpg'
    }]
  }, {
    name: 'Dynamic Logic',
    duration: 4511,
    sources: [{
      src: 'https://www.youtube.com/embed/46CAYXZxZi0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter5/Dynamic Logic.vtt' },
    poster: './assets/Poster/Chapeter5/Dynamic Logic.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter5/Dynamic Logic.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter5/Dynamic Logic.jpg'
    }]

  }, {
    name: 'Static & Dynamic cmos style',
    duration: 335,
    sources: [{
      src: 'https://www.youtube.com/embed/T0-ucTJj_Po',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter5/static dynamic cmos style.vtt' },
    poster: './assets/Poster/Chapeter5/static dynamic cmos style.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter5/static dynamic cmos style.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter5/static dynamic cmos style.jpg'
    }]
  }, {
    name: 'MOS Dynamic Circuits',
    duration: 3438,
    sources: [{
      src: 'https://www.youtube.com/embed/Eu9MLCekmwU',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter5/MOS Dynamic Circuits.vtt' },
    poster: './assets/Poster/Chapeter5/MOS Dynamic Circuits.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter5/MOS Dynamic Circuits.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter5/MOS Dynamic Circuits.jpg'
    }]
  }, {
    name: 'Static CMOS Digital Logic circuits',
    duration: 381,
    sources: [{
      src: 'https://www.youtube.com/embed/vGYTf7EJ7mY',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter5/Static CMOS Digital Logic circuits.vtt' },
    poster: './assets/Poster/Chapeter5/Static CMOS Digital Logic circuits.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter5/Static CMOS Digital Logic circuits.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter5/Static CMOS Digital Logic circuits.jpg'
    }]

  }, {
    name: 'Dynamic CMOS Logic',
    duration: 170,
    sources: [{
      src: 'https://www.youtube.com/embed/p-ZZthcQNN0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter5/Dynamic CMOS Logic.vtt' },
    poster: './assets/Poster/Chapeter5/Dynamic CMOS Logic.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter5/Dynamic CMOS Logic.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter5/Dynamic CMOS Logic.jpg'
    }]

  }, {
    name: 'Dynamic & Domino Logic Circuits',
    duration: 1587,
    sources: [{
      src: 'https://www.youtube.com/embed/wf4HLwT-mHI',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter5/Dynamic & Domino Logic Circuits.vtt' },
    poster: './assets/Poster/Chapeter5/Dynamic & Domino Logic Circuits.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter5/Dynamic & Domino Logic Circuits.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter5/Dynamic & Domino Logic Circuits.jpg'
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



