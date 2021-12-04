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

    name: 'How Integrated Circuits Work',
    duration: 563,
    sources: [{
      src: 'https://www.youtube.com/embed/igVtLuqmxyM',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter1/How Integrated Circuits Work - The Learning Circuit.vtt' },
    poster: './assets/Poster/Chapeter1/How Integrated Circuits Work - The Learning Circuit.jpg',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter1/How Integrated Circuits Work - The Learning Circuit.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter1/How Integrated Circuits Work - The Learning Circuit.jpg'
    }]
  }, {
    name: 'Integrated Circuits Introduction',
    duration: 371,
    sources: [{
      src: 'https://www.youtube.com/embed/sTwRQDVHNiw',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter1/Integrated Circuits.vtt' },
    poster: './assets/Poster/Chapeter1/Integrated Circuits.jpg',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter1/Integrated Circuits.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter1/Integrated Circuits.jpg'
    }]
  }, {
    name: 'What is an Integrated Circuit',
    duration: 141,
    sources: [{
      src: 'https://www.youtube.com/embed/71FtcdwR2BU',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter1/What is an Integrated Circuit.vtt' },
    poster: './assets/Poster/Chapeter1/What is an Integrated Circuit.jpg',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter1/What is an Integrated Circuit.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter1/What is an Integrated Circuit.jpg'
    }]
  }, {
    name: 'Integrated Circuits: 555 Timer',
    duration: 1435,
    sources: [{
      src: 'https://www.youtube.com/embed/IbGrNgx6-lg',
      type: 'video/youtube'
    }],

    track: { kind: 'captions', label: 'English', srclang: 'en', src: './assets/VTT/Chapeter1/Integrated Circuits 555 Timer.vtt' },
    poster: './assets/Poster/Chapeter1/Integrated Circuits-555 Timer.jpg',
    thumbnail: [{
      srcset: './assets/Thumbnail/Chapeter1/Integrated Circuits-555 Timer.jpg',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Chapeter1/Integrated Circuits-555 Timer.jpg'
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



