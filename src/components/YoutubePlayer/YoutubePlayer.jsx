import React, { useEffect } from 'react';

const YouTubePlayer = () => {
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('player', {
        height: '232',
        width: '414',
        videoId: '8bmc-BPvwis',
        playerVars: {
          autoplay: 1,
          controls: 1,
          mute: 1 
        },
      });
    };
  }, []);

  return <div id="player" className="main__video"></div>;
};

export default YouTubePlayer;