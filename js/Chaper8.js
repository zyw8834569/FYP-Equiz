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
    name: 'Sub-System Design',
    duration: 481,
    sources: [{
      src: 'https://www.youtube.com/embed/vYJ3YokE4AM',
      type: 'video/youtube',

    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter8/Sub-System Design.vtt' },
    poster: './assets/Poster/Chapeter8/Sub-System Design.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter8/Sub-System Design.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter8/Sub-System Design.jpg'
    }],
  }, {

    name: 'Subsystem Design',
    duration: 1025,
    sources: [{
      src: 'https://www.youtube.com/embed/L-mtw2KHIlk',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter8/Subsystem Design.vtt' },
    poster: './assets/Poster/Chapeter8/Subsystem Design.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter8/Subsystem Design.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter8/Subsystem Design.jpg'
    }]
  }, {
    name: 'CMOS design methodology',
    duration: 849,
    sources: [{
      src: 'https://www.youtube.com/embed/tJlYMLshnBI',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter8/CMOS design methodology.vtt' },
    poster: './assets/Poster/Chapeter8/CMOS design methodology.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter8/CMOS design methodology.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter8/CMOS design methodology.jpg'
    }]
  }, {
    name: 'Cmos IC Design - Design Methodology',
    duration: 144,
    sources: [{
      src: 'https://www.youtube.com/embed/nUmRvDqQlNc',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter8/Cmos IC Design - Design Methodology.vtt' },
    poster: './assets/Poster/Chapeter8/Cmos IC Design - Design Methodology.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter8/Cmos IC Design - Design Methodology.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter8/Cmos IC Design - Design Methodology.jpg'
    }]

  }, {
    name: 'CMOS-DESIGN METHODOLOGY',
    duration: 175,
    sources: [{
      src: 'https://www.youtube.com/embed/kUMG4GFkW38',
      type: 'video/youtube'
    }],

    // track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter8/CMOS-DESIGN METHODOLOGY.vtt' },
    poster: './assets/Poster/Chapeter8/CMOS-DESIGN METHODOLOGY.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter8/CMOS-DESIGN METHODOLOGY.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter8/CMOS-DESIGN METHODOLOGY.jpg'
    }]
  }, {
    name: 'design Methodologies',
    duration: 925,
    sources: [{
      src: 'https://www.youtube.com/embed/286OUoKGjlI',
      type: 'video/youtube'
    }],
    // track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter8/design Methodologies.vtt' },
    poster: './assets/Poster/Chapeter8/design Methodologies.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter8/design Methodologies.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter8/design Methodologies.jpg'
    }]
  }, {
    name: 'Subsystem design process',
    duration: 1084,
    sources: [{
      src: 'https://www.youtube.com/embed/jrUk8Bjja6k',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter8/Subsystem design process.vtt' },
    poster: './assets/Poster/Chapeter8/Subsystem design process.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter8/Subsystem design process.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter8/Subsystem design process.jpg'
    }]

  }, {
    name: 'Subsystem design process-1',
    duration: 762,
    sources: [{
      src: 'https://www.youtube.com/embed/k5eQawpOQbU',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter8/Subsystem design process-1.vtt' },
    poster: './assets/Poster/Chapeter8/Subsystem design process-1.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter8/Subsystem design process-1.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter8/Subsystem design process-1.jpg'
    }]

  }, {
    name: 'Subsystem design process-2',
    duration: 660,
    sources: [{
      src: 'https://www.youtube.com/embed/7tsfDRuXXMM',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter8/Subsystem design process-2.vtt' },
    poster: './assets/Poster/Chapeter8/Subsystem design process-2.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter8/Subsystem design process-2.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter8/Subsystem design process-2.jpg'
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



