import { PropTypes } from "prop-types";
import { USFlag } from "../icons/USFlag";
import { ESPFlag } from "../icons/ESPFlag";
import { useRef } from "react";

export function Card({ card, handleCard }) {
    const buttonSoundRef = useRef(null);

    const playButtonSound = () => {
        const buttonSound = buttonSoundRef.current;
        buttonSound.currentTime = 0;
        buttonSound.play();
    };

    const handleButtonClick = () => {
        handleCard(card.id);
        playButtonSound();
    }

    return (
        <div
            onClick={() => handleButtonClick()}
            className="group h-48 w-[10rem] [perspective:1000px] m-auto"
        >
            <div
                className={`relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d]  ${
                    card.flipped ? "[transform:rotateY(180deg)]" : ""
                }`}
            >
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden">
                    <img
                        className="cover h-full m-auto"
                        src="/imgs/card_img.png"
                        alt=""
                    />
                </div>
                <div className="bg-white absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl flex flex-col items-center justify-center text-center p-2">
                    <p className="font-semibold flex items-center gap-2 text-xl">
                        {card.content}{card.language === "en" ? <USFlag /> : <ESPFlag />}
                    </p>
                </div>
            </div>
            <audio ref={buttonSoundRef} className="hidden">
                <source src="/audio/Menu-Selection-Click.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
        
    );
}



Card.propTypes = {
    card: PropTypes.object,
    handleCard: PropTypes.func,
};
