
import React, { useState, useRef } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <h1>Music Player</h1>
            <audio ref={audioRef} controls>
                <source src="http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3" type="audio/mpeg" />
            </audio>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    );
};

export default MusicPlayer;
