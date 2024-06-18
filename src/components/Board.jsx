import { Card } from "./Card";
import { useShuffle } from "../hooks/useShuffle";
import { useState, useEffect } from "react";
import { CARDS } from "../lib/card";
import confetti from "canvas-confetti";
import { Modal } from "./Modal";
import { NavLink } from "react-router-dom";
import { ROUTE_PATHS } from "../routes";

export function Board() {
    const [cards, setCards] = useState(useShuffle(CARDS));
    const [cardsFlipped, setCardsFlipped] = useState([]);
    const [cardsMatched, setCardsMatched] = useState([]);
    const [isBoardLocked, setIsBoardLocked] = useState(false);
    const [moves, setMoves] = useState(0);
    const [isGameWon, setIsGameWon] = useState(false);

    useEffect(() => {
        if (cardsMatched.length === CARDS.length) {
            setIsGameWon(true);
            confetti({
                particleCount: 250,
                spread: 250,
            });
            resetGame(1000);
        }
    }, [cardsMatched]);

    function handleCard(id) {
        if (isBoardLocked) return;

        const newCards = [...cards];
        const currentCard = newCards.find((card) => card.id === id);

        if (!currentCard.flipped && !currentCard.matched) {
            currentCard.flipped = true;
            const newFlippedCards = [...cardsFlipped, currentCard];
            setCardsFlipped(newFlippedCards);
            setCards(newCards);

            if (newFlippedCards.length === 2) {
                setIsBoardLocked(true);
                setMoves((moves) => moves + 1);
                checkMatch(newFlippedCards);
            }
        }
    }

    const checkMatch = (newFlippedCards) => {
        const [firstCard, secondCard] = newFlippedCards;

        if (firstCard.coupleId === secondCard.coupleId) {
            firstCard.matched = true;
            secondCard.matched = true;
            setCardsMatched((prev) => [...prev, firstCard, secondCard]);
            setIsBoardLocked(false);
        } else {
            setTimeout(() => {
                firstCard.flipped = false;
                secondCard.flipped = false;
                setCards((prevCards) =>
                    prevCards.map((card) =>
                        card.id === firstCard.id || card.id === secondCard.id
                            ? { ...card, flipped: false }
                            : card
                    )
                );
                setIsBoardLocked(false);
            }, 600);
        }
        setCardsFlipped([]);
    };

    const resetGame = (time) => {
        setTimeout(() => {
            const resetCards = cards.map((card) => ({
                ...card,
                flipped: false,
                matched: false,
            }));
            setCards(resetCards);
            setCardsMatched([]);
            setCardsFlipped([]);
            setMoves(0);
            setIsGameWon(false);
            const shuffledCards = useShuffle(CARDS);
            setCards(shuffledCards);
        }, time);
    };

    return (
        <div
            className="bg-zinc-900 text-white dark:text-black min-h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/imgs/magic.png')" }}
        >
            <section className="p-4 min-h-screen  flex flex-col sm:justify-center mt-6 sm:mt-0 lg:items-center lg:p-0 bg-['/imgs/night-sky-cartoon.jpg']">
                {isGameWon && <Modal setWonGame={setIsGameWon} />}
                <h2 className="text-4xl font-semibold mb-4 text-center text-white ">Moves: {moves}</h2>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))]  lg:grid-cols-[repeat(auto-fill,_minmax(210px,_1fr))] lg:max-w-screen-xl gap-4">
                    {cards.map((card) => (
                        <Card key={card.id} card={card} handleCard={handleCard} />
                    ))}
                </div>
                <div className="flex gap-8 mb-10 flex-col w-full items-center lg:flex-row lg:w-auto mt-10">
                    <div className="flex gap-4 lg:w-auto">
                        <NavLink
                            className="text-center py-4 px-10 border border-red-600 rounded-lg font-semibold mt-6 hover:bg-red-600 hover:text-white"
                            to={ROUTE_PATHS.HOME}
                            onClick={() => resetGame(100)}
                        >
                            Exit
                        </NavLink>

                        <button
                            className="p-4 bg-sky-600 rounded-lg text-white font-semibold mt-6 hover:bg-sky-700"
                            onClick={() => resetGame(100)}
                        >
                            Reset Game
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
