var options = {
  techOrder:["html5","youtube"],
  "youtube": { "cc_load_policy":0,"modestbranding":1,"iv_load_policy":3,"disablekb":0 },
  html5: {
    hls: {
      overrideNative: true
    },
    nativeAudioTracks: false,
    nativeVideoTracks: false,
  },
  controls:true,
  autoplay:false,
  preload:'auto',
  playbackRates: [0.75, 1, 1.25,1.5],
  fluid:true,
  controlBar: {
    'volumePanel': {
      inline:false
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
    'pictureInPictureToggle':disablePicture()
 }
}
// disable picture in picture in chrome on mobile devices
function disablePicture (){
  var na = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(na)){
    return false;
  }else {
    return true;
  }
} 
var player = videojs('my-video', options);
player.aspectRatio('16:9')
player.fill(true);
player.fluid(true);

var playlist = 
[
  {
    name: 'What is an operational amplifier',
    duration: 693,
    sources: [{
      src: 'https://www.youtube.com/embed/lJDjWZqhpVc?controls=0"',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/What is an operational amplifier.vtt'},
    poster: './assets/Poster/Feedback/What is an operational amplifier.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/What is an operational amplifier.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/What is an operational amplifier.png'
        }],
  }, 
  {
    name: 'Concept of Negative Feedback',
    duration: 902,
    sources: [{
      src: 'https://www.youtube.com/embed/hU8zx0RGJGQ?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Concept of Negative Feedback.vtt'},
    poster: './assets/Poster/Feedback/Concept of Negative Feedback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Concept of Negative Feedback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Concept of Negative Feedback.png'
        }],
  }, 
  {
    name: 'Classification of Feedback Topologies',
    duration: 1101,
    sources: [{
      src: 'https://www.youtube.com/embed/MJjBDGa7o9k?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Classification of Feedback Topologies.vtt'},
    poster: './assets/Poster/Feedback/Classification of Feedback Topologies.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Classification of Feedback Topologies.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Classification of Feedback Topologies.png'
        }],
 
  }, 
  {
    name: 'Series-Shunt',
    duration: 405,
    sources: [{
      src: 'https://www.youtube.com/embed/g-e_KMT4ckc?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Series-Shunt.vtt'},
    poster: './assets/Poster/Feedback/Series-Shunt.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Series-Shunt.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Series-Shunt.png'
        }],
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
    name: 'Series-Series Simulation',
    duration: 348,
    sources: [{
      src: './assets/Lab simulation/Feedback Circuit/Series-Series Feedback/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    poster: './assets/Poster/Feedback/Series-Series Feedback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Series-Series Feedback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Series-Series Feedback.png'
        }],
      overlays: [{
        content: '<h2>Series-Series simulation</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
  {
    name: 'Series-Shunt Simulation',
    duration: 484,
    sources: [{
      src: './assets/Lab simulation/Feedback Circuit/Series-Shunt Feedback/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    poster: './assets/Poster/Feedback/Series-Shunt Feedback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Series-Shunt Feedback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Series-Shunt Feedback.png'
        }],
      overlays: [{
        content: '<h2>Series-Shunt simulation</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
  {
    name: 'Shunt-series',
    duration: 365,
    sources: [{
      src: 'https://www.youtube.com/embed/a9kSibPi8yI?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Shunt-series.vtt'},
    poster: './assets/Poster/Feedback/Shunt-series.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Shunt-series.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Shunt-series.png'
        }],
  }, 
  {
    name: 'Shunt-series Simulation',
    duration: 351,
    sources: [{
      src: './assets/Lab simulation/Feedback Circuit/Shunt-series feedback/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    poster: './assets/Poster/Feedback/Shunt-series Feedback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Shunt-series Feedback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Shunt-series Feedback.png'
        }],
      overlays: [{
        content: '<h2>Shunt-series simulation</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  },
  {
    name: 'Shunt-Shunt',
    duration: 633,
    sources: [{
      src: 'https://www.youtube.com/embed/9u_-HYSlfA0?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Shunt-Shunt.vtt'},
    poster: './assets/Poster/Feedback/Shunt-Shunt.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Shunt-Shunt.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Shunt-Shunt.png'
        }],
  }, 
  {
    name: 'Shunt-Shunt Feeback Simulation',
    duration: 225,
    sources: [{
      src: './assets/Lab simulation/Feedback Circuit/Shunt-Shunt Feeback/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    poster: './assets/Poster/Feedback/Shunt-Shunt Feeback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Shunt-Shunt Feeback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Shunt-Shunt Feeback.png'
        }],
      overlays: [{
        content: '<h2>Shunt-Shunt Feeback simulation</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  },
  {
    name: 'Shortcuts Steps for Problems on Negative Feedback',
    duration: 1451,
    sources: [{
      src: 'https://www.youtube.com/embed/Y-bUtWZn5Ro?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Shortcuts Steps for Problems on Negative Feedback.vtt'},
    poster: './assets/Poster/Feedback/Shortcuts Steps for Problems on Negative Feedback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Shortcuts Steps for Problems on Negative Feedback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Shortcuts Steps for Problems on Negative Feedback.png'
        }],
      overlays: [{
        content: '<h2>Shortcuts Steps for Problems on Negative Feedback</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
];
player.on('playlistitem', function (event,video) {
  player.overlay({
    overlays: video.overlays
  });
});

player.playlist(playlist);
player.playlist.autoadvance(7);
player.playlistUi();

function horizontal(){
  let w = window.outerWidth;
  let h = window.outerHeight;
  for(let i = 0; i<10;i++){
  if (w < 768){
    player.playlistUi({horizontal: true});
  }else{
    document.getElementById('playlist').classList.remove('vjs-playlist-horizontal')
  }
}

}

player.seekButtons({
  forward: 10,
  back:10
});

//Disable the quiz button until it is the last video

const button = document.getElementById('quiz-btn');
const link = document.getElementById('link');
function showAlert(){
  if(player.playlist.currentIndex() !== player.playlist.lastIndex()){
   link.removeAttribute("href");
    button.disabled = true;
    alert("Please finish all the video before proceeding to the quiz");
  }
  player.on('ended' , function (){
  if(player.playlist.currentIndex() !== player.playlist.lastIndex()){
    link.removeAttribute("href");
    button.disabled = true;
  }else if(player.playlist.currentIndex() == player.playlist.lastIndex()) {
    link.href ="quiz/CMOSquiz.html"
    button.disabled = false;
    }
  })
}



