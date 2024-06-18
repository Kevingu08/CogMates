import { NavLink } from 'react-router-dom'
import { ROUTE_PATHS } from "../routes";

export function Modal({setWonGame}) {
    return (
        <>
            <article className="z-10 w-full min-h-full absolute flex flex-col items-center justify-center">
                <div className="bg-white rounded-md p-10 text-center border border-black">
                    <div className="grid gap-2">
                        <h2 className="text-xl font-bold">¡¡Congratulation you won!!</h2>
                        <p>Would you like to play again?</p>
                    </div>
                    <div className="mt-6 w-full flex flex-col gap-4">
                        <button onClick={() => setWonGame(false)} className="p-4 bg-sky-600 rounded-lg hover:bg-sky-700 cursor-pointer font-semibold text-white w-full">OK</button>
                        <NavLink to={ROUTE_PATHS.HOME} onClick={() => setWonGame(false)} className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white cursor-pointer font-semibold  w-full inline-block">Exit</NavLink>  
                    </div>
                </div>
            </article>
        </>
    );
}
