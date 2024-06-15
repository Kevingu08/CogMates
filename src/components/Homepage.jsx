import React, { useRef, useState, useEffect } from "react";

export function Homepage() {
  const audioRef = useRef(null);
  const buttonSoundRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [startButtonScale, setStartButtonScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartButtonScale(scale => (scale === 1 ? 1.05 : 1)); 
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (musicPlaying) {
      audio.pause();
    } else {
      audio.volume = 0.5;
      audio.loop = true;
      audio.currentTime = 0;
      audio.play();
    }
    setMusicPlaying(!musicPlaying);
  };

  const playButtonSound = () => {
    const buttonSound = buttonSoundRef.current;
    buttonSound.currentTime = 0;
    buttonSound.play();
  };

  return (
    <div
      className="bg-zinc-900 text-white dark:text-black min-h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/imgs/Magos.png')" }}
    >
      <div className="bg-zinc-800 bg-opacity-50 p-8 rounded-full text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to CogMates!</h1>
        <p className="text-lg mb-8">
          Explore this awesome world in which you'll learn a lot about English
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 mt-8">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform duration-10 transform-gpu ${
            startButtonScale === 1 ? "scale-500" : "scale-75"
          }`}
          onClick={() => {
            playButtonSound();
          }}
        >
          Start
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-transform transform-gpu hover:scale-105"
          onClick={() => {
            playButtonSound();
            
          }}
        >
          Instructions
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-transform transform-gpu hover:scale-105"
          onClick={() => {
            playButtonSound();
          }}
        >
          Exit
        </button>
      </div>

      <button
        className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleMusic}
      >
        {musicPlaying ? "Pause Music" : "Play Music"}
      </button>

      <footer className="text-center text-black font-bold mt-8 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        Developed by Kevin Guido, Isaac Corella, Jose Zamora, and Hugo Ugalde
      </footer>

      <audio ref={audioRef} className="hidden">
        <source src="/audio/videogame-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <audio ref={buttonSoundRef} className="hidden">
        <source src="/audio/magical_1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
