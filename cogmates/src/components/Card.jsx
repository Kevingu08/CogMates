import { useState } from "react";

export function Card() {
    const [active, setActive] = useState(false);

    function flipCard(e) {
        const currentTarget = e.currentTarget;
        console.log(currentTarget);
        setActive(!active);
    }

    return (
        <div
            onClick={(e) => flipCard(e)}
            className="group h-48 w-48 [perspective:1000px]"
        >
            <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  ${active ? '[transform:rotateY(180deg)]' : ''} border border-sky-700`}>
                <div className="absolute inset-0 [backface-visibility:hidden] bg-slate-400 rounded-xl">
                    <h1>Front Card</h1>
                    <p>face parte card</p>
                </div>
                <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl">
                    <h2>back Card</h2>
                    <p>this is a back card</p>
                </div>
            </div>
        </div>
    );
}
