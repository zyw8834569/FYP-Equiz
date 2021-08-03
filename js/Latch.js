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
  name: 'CMOS NOR gate ',
  duration: 540,
  sources: [{
    src: 'https://www.youtube.com/embed/601dZ7NYJf4?controls=0',
    type: 'video/youtube'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/CMOS Nor Gate.vtt'},
  poster: './assets/Poster/Latches & Flip Flop/CMOS Nor gate.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/Latches & Flip Flop/CMOS Nor gate.png',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
    }, {
    src: './assets/Thumbnail/Latches & Flip Flop/CMOS Nor gate.png'
    }],
  },
  {
    name: 'CMOS NAND gate ',
    duration: 480,
    sources: [{
      src: 'https://www.youtube.com/embed/orNRyYhOtG8?controls=0',
      type: 'video/youtube'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/CMOS Nand Gate.vtt'},
    poster: './assets/Poster/Latches & Flip Flop/CMOS NAND gate.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Latches & Flip Flop/CMOS NAND gate.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
      }, {
      src: './assets/Thumbnail/Latches & Flip Flop/CMOS NAND gate.png'
      }],
    },
    {
      name: 'Latches and Flip-Flops 1 - The SR latch ',
      duration: 733,
      sources: [{
        src: 'https://www.youtube.com/embed/-aQH0ybMd3U?controls=0',
        type: 'video/youtube'
      }],
      track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Latches and Flip-Flops 1 - The SR latch.vtt'},
      poster: './assets/Poster/Latches & Flip Flop/Latches and Flip-Flops 1 - The SR latch.png',
      thumbnail: [{
        srcset: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip-Flops 1 - The SR latch.png',
        type: 'image/jpeg',
        media: '(min-width: 50px;)'
        }, {
        src: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip-Flops 1 - The SR latch.png'
        }],
      },
      {
        name: 'Latches and Flip-Flop 2 The gated SR latch ',
        duration: 572,
        sources: [{
          src: 'https://www.youtube.com/embed/HxAhOETcvr4?controls=0',
          type: 'video/youtube'
        }],
        track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Latches and Flip Flop 2 The gated SR latch.vtt'},
        poster: './assets/Poster/Latches & Flip Flop/Latches and Flip Flop 2 The gated SR latch.png',
        thumbnail: [{
          srcset: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip-Flop 2 The gated SR latch.png',
          type: 'image/jpeg',
          media: '(min-width: 50px;)'
          }, {
          src: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip-Flop 2 The gated SR latch.png'
          }],
        },
        {
          name: 'Clocked SR flip flop',
          duration: 712,
          sources: [{
            src: 'https://www.youtube.com/embed/zoqu3k0qGqs?controls=0',
            type: 'video/youtube'
          }],
          track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Clocked SR flip flop.vtt'},
          poster: './assets/Poster/Latches & Flip Flop/Clocked SR flip flop.png',
          thumbnail: [{
            srcset: './assets/Thumbnail/Latches & Flip Flop/Clocked SR flip flop.png',
            type: 'image/jpeg',
            media: '(min-width: 50px;)'
            }, {
            src: './assets/Thumbnail/Latches & Flip Flop/Clocked SR flip flop.png'
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
            name: 'SR Latches simulation ',
            duration: 569,
            sources: [{
              src: './assets/Lab simulation/Latches & Flip Flop/SR latches/playlist.m3u8',
              type: 'application/x-mpegURL'
            }],
            poster: './assets/Poster/Latches & Flip Flop/SR latches.png',
            thumbnail: [{
              srcset: './assets/Thumbnail/Latches & Flip Flop/SR latches.png',
              type: 'image/jpeg',
              media: '(min-width: 50px;)'
              }, {
              src: './assets/Thumbnail/Latches & Flip Flop/SR latches.png'
              }],
              overlays: [{
                content: '<h2>SR Latches simulation</h2>',
                showBackground: true,
                start: 'pause',
                end: 'play',
                align: 'top-left'
              }]
            },
          {
            name: 'JK Flip-flop',
            duration: 510,
            sources: [{
              src: 'https://www.youtube.com/embed/KdS2lwMjj_U?controls=0',
              type: 'video/youtube'
            }],
            track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/JK Flip-flop.vtt'},
            poster: './assets/Poster/Latches & Flip Flop/JK Flip-flop.png',
            thumbnail: [{
              srcset: './assets/Thumbnail/Latches & Flip Flop/JK Flip-flop.png',
              type: 'image/jpeg',
              media: '(min-width: 50px;)'
              }, {
              src: './assets/Thumbnail/Latches & Flip Flop/JK Flip-flop.png'
              }],
            },
            {
              name: 'JK Flip Flop Simulation',
              duration: 343,
              sources: [{
                src: './assets/Lab simulation/Latches & Flip Flop/JK Flip Flop 1/playlist.m3u8',
                type: 'application/x-mpegURL'
              }],
              poster: './assets/Poster/Latches & Flip Flop/JK Flip Flop 1.png',
              thumbnail: [{
                srcset: './assets/Thumbnail/Latches & Flip Flop/JK Flip Flop 1.png',
                type: 'image/jpeg',
                media: '(min-width: 50px;)'
                }, {
                src: './assets/Thumbnail/Latches & Flip Flop/JK Flip Flop 1.png'
                }],
                overlays: [{
                  content: '<h2>JK Flip Flop Simulation </h2>',
                  showBackground: true,
                  start: 'pause',
                  end: 'play',
                  align: 'top-left'
                }]
              },
            {
              name: 'Master Slave Flip Flop',
              duration: 933,
              sources: [{
                src: 'https://www.youtube.com/embed/jR5JZDobTeo?controls=0',
                type: 'video/youtube'
              }],
              track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Master Slave Flip Flop.vtt'},
              poster: './assets/Poster/Latches & Flip Flop/Master Slave Flip Flop.png',
              thumbnail: [{
                srcset: './assets/Thumbnail/Latches & Flip Flop/Master Slave Flip Flop.png',
                type: 'image/jpeg',
                media: '(min-width: 50px;)'
                }, {
                src: './assets/Thumbnail/Latches & Flip Flop/Master Slave Flip Flop.png'
                }],
              },
              {
                name: 'Master Slave Flip Flop simulation  ',
                duration: 64,
                sources: [{
                  src: './assets/Lab simulation/Latches & Flip Flop/Master Slave Flip Flop/playlist.m3u8',
                  type: 'application/x-mpegURL'
                }],
                poster: './assets/Poster/Latches & Flip Flop/Master Slave Flip Flop 1.png',
                thumbnail: [{
                  srcset: './assets/Thumbnail/Latches & Flip Flop/Master Slave Flip Flop 1.png',
                  type: 'image/jpeg',
                  media: '(min-width: 50px;)'
                  }, {
                  src: './assets/Thumbnail/Latches & Flip Flop/Master Slave Flip Flop 1.png'
                  }],
                  overlays: [{
                    content: '<h2>Master Slave Flip Flop simulation</h2>',
                    showBackground: true,
                    start: 'pause',
                    end: 'play',
                    align: 'top-left'
                  }]
                },
        {
          name: 'Latches and Flip Flops 3 The gated D latch',
          duration: 467,
          sources: [{
            src: 'https://www.youtube.com/embed/y7Zf7Bv_J74?controls=0',
            type: 'video/youtube'
          }],
          track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Latches and Flip Flops 3 The gated D latch.vtt'},
          poster: './assets/Poster/Latches & Flip Flop/Latches and Flip Flops 3 The gated D latch.png',
          thumbnail: [{
            srcset: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip Flops 3 The gated D latch.png',
            type: 'image/jpeg',
            media: '(min-width: 50px;)'
            }, {
            src: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip Flops 3 The gated D latch.png'
            }],
          },
          {
            name: 'Rising and Falling edge trigged Flip Flop',
            duration: 382,
            sources: [{
              src: 'https://www.youtube.com/embed/nUftVRJE9rA?controls=0',
              type: 'video/youtube'
            }],
            track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Rising and Falling edge trigged Flip Flop.vtt'},
            poster: './assets/Poster/Latches & Flip Flop/Rising and Falling edge trigged Flip Flop.png',
            thumbnail: [{
              srcset: './assets/Thumbnail/Latches & Flip Flop/Rising and Falling edge trigged Flip Flop.png',
              type: 'image/jpeg',
              media: '(min-width: 50px;)'
              }, {
              src: './assets/Thumbnail/Latches & Flip Flop/Rising and Falling edge trigged Flip Flop.png'
              }],
            },
            {
              name: 'D flip flop with clock  ',
              duration: 362,
              sources: [{
                src: './assets/Lab simulation/Latches & Flip Flop/D flip flop with clock/playlist.m3u8',
                type: 'application/x-mpegURL'
              }],
              poster: './assets/Poster/Latches & Flip Flop/D flip flop with clock.png',
              thumbnail: [{
                srcset: './assets/Thumbnail/Latches & Flip Flop/D flip flop with clock.png',
                type: 'image/jpeg',
                media: '(min-width: 50px;)'
                }, {
                src: './assets/Thumbnail/Latches & Flip Flop/D flip flop with clock.png'
                }],
                overlays: [{
                  content: '<h2>D flip flop with clock</h2>',
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


// Fast forward button
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



