import { PropTypes } from "prop-types";
import { USFlag } from "../icons/USFlag";
import { ESPFlag } from "../icons/ESPFlag";

export function Card({ card, handleCard }) {
    return (
        <div
            onClick={() => handleCard(card.id)}
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
        </div>
    );
}

Card.propTypes = {
    card: PropTypes.object,
    handleCard: PropTypes.func,
};
