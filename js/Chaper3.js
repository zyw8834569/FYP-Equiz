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
    name: 'BiCMOS logic',
    duration: 405,
    sources: [{
      src: 'https://www.youtube.com/embed/fpoJw8JOkI4',
      type: 'video/youtube',

    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter3/BiCMOS logic.vtt' },
    poster: './assets/Poster/Chapeter3/BiCMOS logic.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter3/BiCMOS logic.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter3/BiCMOS logic.jpg'
    }],
  }, {

    name: 'BiCMOS Gates',
    duration: 2908,
    sources: [{
      src: 'https://www.youtube.com/embed/VTTJ7nYSus8',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter3/BiCMOS Gates.vtt' },
    poster: './assets/Poster/Chapeter3/BiCMOS Gates.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter3/BiCMOS Gates.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter3/BiCMOS Gates.jpg'
    }]
  }, {
    name: 'BiCMOS Technologies',
    duration: 192,
    sources: [{
      src: 'https://www.youtube.com/embed/e7k_KLwUwaQ',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter3/BiCMOS Technologies.vtt' },
    poster: './assets/Poster/Chapeter3/BiCMOS Technologies.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter3/BiCMOS Technologies.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter3/BiCMOS Technologies.jpg'
    }]
  }, {
    name: 'BiCMOS Fabrication',
    duration: 265,
    sources: [{
      src: 'https://www.youtube.com/embed/-4jOzGN0GTw',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter3/BiCMOS Fabrication.vtt' },
    poster: './assets/Poster/Chapeter3/BiCMOS Fabrication.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter3/BiCMOS Fabrication.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter3/BiCMOS Fabrication.jpg'
    }]
  }, {
    name: 'BICMOS NAND Gate',
    duration: 997,
    sources: [{
      src: 'https://www.youtube.com/embed/Ib5MNFvu1aA',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter3/BICMOS NAND Gate.vtt' },
    poster: './assets/Poster/Chapeter3/BICMOS NAND Gate.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter3/BICMOS NAND Gate.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter3/BICMOS NAND Gate.jpg'
    }]
  }, {
    name: 'BiCMOS Fabrication 2',
    duration: 624,
    sources: [{
      src: 'https://www.youtube.com/embed/7f3Z3K7kz5U',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter3/BiCMOS Fabrication 2.vtt' },
    poster: './assets/Poster/Chapeter3/BiCMOS Fabrication 2.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter3/BiCMOS Fabrication 2.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter3/BiCMOS Fabrication 2.jpg'
    }]
  }, {
    name: 'Bi-CMOS TECHNOLOGY',
    duration: 894,
    sources: [{
      src: 'https://www.youtube.com/embed/MbZqDRJjqPg',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter3/Bi-CMOS TECHNOLOGY.vtt' },
    poster: './assets/Poster/Chapeter3/Bi-CMOS TECHNOLOGY.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter3/Bi-CMOS TECHNOLOGY.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter3/Bi-CMOS TECHNOLOGY.jpg'
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



