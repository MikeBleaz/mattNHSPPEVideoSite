var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var ytSeconds;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: videoId,
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(e) {
  if (e.data == 1 && ytSeconds > 0) {
    e.target.seekTo(ytSeconds);
    ytSeconds = 0;
  }
}


function seekTo(seconds)
{
  if (player.getPlayerState() == 1) {
    player.seekTo(seconds);
  }
  else {
    ytSeconds = seconds;
    player.playVideo();
  }
}
