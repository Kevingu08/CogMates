import { useState } from "react";

export function Modal({setWonGame}) {


    return (
        <>
            <article className="z-10 w-full min-h-full absolute flex flex-col items-center justify-center">
                <div className="bg-white rounded-md p-10 text-center border border-black">
                    <div className="grid gap-2">
                        <h2 className="text-xl font-bold">¡¡Congratulation you won!!</h2>
                        <p>Would you like to play again?</p>
                    </div>
                    <div className="mt-6 w-full">
                        <button onClick={() => setWonGame(false)} className="p-4 bg-sky-600 rounded-lg hover:bg-sky-700 cursor-pointer font-semibold text-white w-full">OK</button>
                    </div>
                </div>
            </article>
        </>
    );
}
