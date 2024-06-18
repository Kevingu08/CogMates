import React from 'react';
import { NavLink } from 'react-router-dom'
import { ROUTE_PATHS } from "../routes";

export function Instructions() {
  const backgroundImage = "url('imgs/instructions-background.png')"; 
  const audio = new Audio('audio/magical_1.mp3'); 

  const handleGoBack = () => {
    audio.play();
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="bg-white bg-opacity-80 dark:bg-zinc-800 dark:bg-opacity-80 shadow-md rounded-lg p-4 max-w-md text-center">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">
          Instructions
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-4">
          CogMates is a memory game designed to test and improve your skills.
          The objective of the game is to find all matching pairs of cards.
          Here’s how it works:
        </p>
        <ol className="text-left list-decimal list-inside mt-4 text-zinc-600 dark:text-zinc-400">
          <li>
            <strong>Select Cards:</strong> At the start of the game, all cards
            are laid face down. You must select one card and then another.
          </li>
          <li>
            <strong>Match Cards:</strong> If the two cards you selected match,
            you earn a point, and both cards will remain face up.
          </li>
          <li>
            <strong>No Match:</strong> If the cards do not match, they will be
            turned face down again, and you will need to remember their
            positions for future attempts.
          </li>
          <li>
            <strong>Timer:</strong> There is a timer that sets a time limit for
            the game. You must find all the matching pairs before the time runs
            out to win.
          </li>
        </ol>
        <p className="text-zinc-600 dark:text-zinc-400 mt-4">
          The game is not only fun but also helps improve your memory and
          concentration skills. Good luck!
        </p>
        <NavLink
          className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-lg mt-4 transform transition duration-300 ease-in-out inline-block"
          onClick={handleGoBack}
          to={ROUTE_PATHS.HOME}
        >
          Go Back
        </NavLink>
      </div>
    </div>
  );
}
