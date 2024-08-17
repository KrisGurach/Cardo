import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.playVideo();
  };

  const opts = {
    height: '220',
    width: '380',
    playerVars: {
      autoplay: 1, 
      modestbranding: 1,
      mute: 1 // обязательно выключаем звук, иначе восрпоизведение будет блочиться
    },
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  }, [videoId]); 

  return (
    <div> 
      <YouTube
        className='main__video'
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
      />
    </div>
  );
};

export default YouTubePlayer;
