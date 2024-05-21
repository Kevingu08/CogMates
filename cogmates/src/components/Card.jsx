import { useState } from "react";

export function Card({allowFlipCard, addCardFlipped, coupleId, content}) {
    const [active, setActive] = useState(false);
    const [matched, setMatched] = useState(false);
    const [idCouple, setIdCouple] = useState(coupleId);

    function flipCard(e) {
        const currentTarget = e.currentTarget;

        if(!allowFlipCard(currentTarget)){
            return;
        }
        setActive(true);
        addCardFlipped(currentTarget);
    }

    return (
        <div
            onClick={(e) => flipCard(e)}
            className="group h-48 w-48 [perspective:1000px]"
        >
            <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  ${active ? '[transform:rotateY(180deg)]' : ''} border border-sky-700`}>
                <div className="absolute inset-0 [backface-visibility:hidden] bg-slate-400 rounded-xl">
                    
                </div>
                <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl flex flex-col items-center justify-center text-center p-2">
                    <p className="font-semibold">{content}</p>
                </div>
            </div>
        </div>
    );
}
