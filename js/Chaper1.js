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
    name: 'What Is An Integrated Circuit (IC)',
    duration: 285,
    sources: [{
      src: 'https://www.youtube.com/embed/drtUkvtxp6s',
      type: 'video/youtube',


    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter1/What Is An Integrated Circuit (IC).vtt' },
    poster: './assets/Poster/Chapeter1/What Is An Integrated Circuit (IC).jpg',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter1/What Is An Integrated Circuit (IC).jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter1/What Is An Integrated Circuit (IC).jpg'
    }],
  }, {
    name: 'Wafer Manufacturing Process',
    duration: 240,
    sources: [{
      src: 'https://www.youtube.com/embed/3TOpg1niATg?controls=0',
      type: 'video/youtube'
    }],
    poster: './assets/Poster/CMOS/Wafer Manufacturing.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/CMOS/Wafer Manufacturing Process.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/CMOS/Wafer Manufacturing Process.jpg'
    }]
  }, {
    name: 'Basic CMOS Process Flow',
    duration: 804,
    sources: [{
      src: 'https://www.youtube.com/embed/GZACoEuiZMo?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/Video/CMOS/vtt/Basic CMOS Process flow.vtt' },
    poster: './assets/Poster/CMOS/CMOS Process Flow.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/CMOS/CMOS Process Flow.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/CMOS/CMOS Process Flow.jpg'
    }]
  }, {
    name: 'Chip Manufacturing',
    duration: 811,
    sources: [{
      src: 'https://www.youtube.com/embed/bor0qLifjz4?controls=0',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/Video/CMOS/vtt/Chips Manufacturing.vtt' },
    poster: './assets/Poster/CMOS/Chips Manufacturing.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/CMOS/Chips Manufacturing.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/CMOS/Chips Manufacturing.jpg'
    }]
  }, {
    name: 'Making Memory Chip process',
    duration: 260,
    sources: [{
      src: 'https://www.youtube.com/embed/M-wNC3Z3ZX4?controls=0',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/Video/CMOS/vtt/Making Memory Chips Process.vtt' },
    poster: './assets/Poster/CMOS/Making Memory Chip.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/CMOS/Making Memory Chip process.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/CMOS/Making Memory Chip process.jpg'
    }]
  },
  {
    name: 'MOSFET Transistor Basics & Working principle',
    duration: 429,
    sources: [{
      src: 'https://www.youtube.com/embed/p34w6ISouZY?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/Video/CMOS/vtt/MOSFET Transistor Basics & Working Principle.vtt' },
    poster: './assets/Poster/CMOS/MOSFET Basic Principle.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/CMOS/MOSFET Basic Principle.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/CMOS/MOSFET Basic Principle.jpg'
    }]
  },
  {
    name: 'MOS Regions of Operation',
    duration: 375,
    sources: [{
      src: 'https://www.youtube.com/embed/1fIzC9QiYDI?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/Video/CMOS/vtt/ECE 3110.vtt' },
    poster: './assets/Poster/CMOS/MOS region of operation.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/CMOS/MOS Region of Operation.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/CMOS/MOS Region of Operation.jpg'
    }]
  },
  {
    name: 'MOSFET IV derivation',
    duration: 949,
    sources: [{
      src: 'https://www.youtube.com/embed/QCIDcB034Eg?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/Video/CMOS/vtt/MOSFET IV Characteristic.vtt' },
    poster: './assets/Poster/CMOS/MOSFET IV Characteristic.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/CMOS/MOSFET IV characteristic.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/CMOS/MOSFET IV characteristic.jpg'
    }]
  }, {
    name: 'Channel Length Modulation',
    duration: 500,
    sources: [{
      src: 'https://www.youtube.com/embed/-jn154sQcZ8?controls=0',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/Video/CMOS/vtt/Channel Length Modulation.vtt' },
    poster: './assets/Poster/CMOS/Channel Length Modulation.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/CMOS/Channel Length Modulation.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/CMOS/Channel Length Modulation.jpg'
    }]
  },
  {
    name: 'How to install Multisim',
    duration: 156,
    sources: [{
      src: './assets/Lab simulation/multisim/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    overlays: [{
      content: '<h2>How to install Multisim</h2>',
      showBackground: true,
      start: 'pause',
      end: 'play',
      align: 'top-left'
    }],
    poster: './assets/Lab simulation/multisim/poster/multisim.png',
    thumbnail: [{
      srcset: './assets/Lab simulation/multisim/poster/multisim.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Lab simulation/multisim/poster/multisim.png'
    }]
  },
  {
    name: 'Lab simulation of Channel length Modulation',
    duration: 156,
    sources: [{
      src: './assets/Lab simulation/CMOS/Channel Length Modulation/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    overlays: [{
      content: '<h2>Lab simulation of Channel length Modulation</h2>',
      showBackground: true,
      start: 'pause',
      end: 'play',
      align: 'top-left'
    }],
    poster: './assets/Lab simulation/CMOS/Poster/Channel Length Modulation.png',
    thumbnail: [{
      srcset: './assets/Lab simulation/CMOS/Thumbnail/Channel Length Modulation.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Lab simulation/CMOS/Thumbnail/Channel Length Modulation.jpg'
    }]
  },
  {
    name: 'Building logic gates from MOSFET transistor',
    duration: 648,
    sources: [{
      src: 'https://www.youtube.com/embed/1rZyGL1K5QI?controls=0',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/Video/CMOS/vtt/Building logic gates.vtt' },
    poster: './assets/Poster/CMOS/Building Logic Gates.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/CMOS/Building logic gate.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/CMOS/Building logic gate.jpg'
    }]
  },
  {
    name: 'CMOS Inverter DC Characteristic',
    duration: 1379,
    sources: [{
      src: 'https://www.youtube.com/embed/Fllo2ja4Ga4?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/Video/CMOS/vtt/CMOS Inverter DC characteristic.vtt' },
    poster: './assets/Poster/CMOS/CMOS Inverter.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/CMOS/CMOS Inverter.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/CMOS/CMOS Inverter.jpg'
    }]
  },
  {
    name: 'Lab simulation of CMOS delay time',
    duration: 303,
    sources: [{
      src: './assets/Lab simulation/CMOS/CMOS delay time/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    overlays: [{
      content: '<h2>Lab simulation of CMOS delay time</h2>',
      showBackground: true,
      start: 'pause',
      end: 'play',
      align: 'top-left'
    }],
    poster: './assets/Lab simulation/CMOS/Poster/CMOS delay time.png',
    thumbnail: [{
      srcset: './assets/Lab simulation/CMOS/Thumbnail/CMOS delay time.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Lab simulation/CMOS/Thumbnail/CMOS delay time.jpg'
    }]
  },
  {
    name: 'Lab simulation of CMOS VTC and Drain',
    duration: 234,
    sources: [{
      src: './assets/Lab simulation/CMOS/CMOS VTC and Drain/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    overlays: [{
      content: '<h2>Lab simulation of CMOS VTC and Drain</h2>',
      showBackground: true,
      start: 'pause',
      end: 'play',
      align: 'top-left'
    }],
    poster: './assets/Lab simulation/CMOS/Poster/CMOS VTC and Drain.png',
    thumbnail: [{
      srcset: './assets/Lab simulation/CMOS/Thumbnail/CMOS VTC and Drain.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Lab simulation/CMOS/Thumbnail/CMOS VTC and Drain.jpg'
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



