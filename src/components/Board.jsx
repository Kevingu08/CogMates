import { Card } from "./Card";
import { useShuffle } from "../hooks/useShuffle";
import { useState, useEffect } from "react";
import { CARDS } from "../lib/card";
import confetti from "canvas-confetti";
import { Modal } from "./Modal";

export function Board() {
    const [cards, setCards] = useState(useShuffle(CARDS));
    const [cardsFlipped, setCardsFlipped] = useState([]);
    const [cardsMatched, setCardsMatched] = useState([]);
    const [isBoardLocked, setIsBoardLocked] = useState(false);
    const [moves, setMoves] = useState(0);
    const [isGameWon, setIsGameWon] = useState(false);
    let newCardsMatched = [];

    console.log(cards);

    function handleCard(id) {
        if (isBoardLocked) return;

        const currentCard = cards.find((card) => card.id === id);

        if (!currentCard.flipped && !currentCard.matched) {
            currentCard.flipped = true;

            const newFlippedCards = [...cardsFlipped, currentCard];
            setCardsFlipped(newFlippedCards);

            if (newFlippedCards.length === 2) {
                setIsBoardLocked(true);
                console.log(isBoardLocked);

                checkMatch(newFlippedCards);
                setCardsFlipped([]);
                setMoves(moves + 1);
            }
            setCards([...cards]);
        }
        console.log(cardsMatched.length);

        if (newCardsMatched.length === CARDS.length) {
			setIsGameWon(true);
            confetti({
                particleCount: 250,
                spread: 250,
            });
            resetGame(1000);
        }
    }

    const checkMatch = (newFlippedCards) => {
        const [firstCard, secondCard] = newFlippedCards;

        if (firstCard.coupleId === secondCard.coupleId) {
            firstCard.matched = true;
            secondCard.matched = true;
            setCardsMatched([...cardsMatched, firstCard, secondCard]);
            newCardsMatched = [...cardsMatched, firstCard, secondCard];

            setIsBoardLocked(false);
        } else {
            setTimeout(() => {
                firstCard.flipped = false;
                secondCard.flipped = false;
                setCards([...cards]);
                setIsBoardLocked(false);
            }, 600);
        }
    };

    const resetGame = (time) => {
        setTimeout(() => {
            cards.map(
                (card) => ((card.flipped = false), (card.matched = false))
            );
            setCardsMatched([]);
            setCardsFlipped([]);
            setMoves(0);
            const shuffledCards = useShuffle(CARDS);
            setCards(shuffledCards);
        }, time);
    };

    return (
        <>
            {
                isGameWon && <Modal setWonGame={setIsGameWon}/>
            }
            <h2 className="text-2xl font-semibold mb-4">Moves: {moves}</h2>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(210px,_1fr))] sm:max-w-screen-xl gap-4">
                {cards.map((card) => (
                    <Card key={card.id} card={card} handleCard={handleCard} />
                ))}
            </div>
            <button
                className="p-4 bg-sky-600 rounded-lg text-white font-semibold mt-6 hover:bg-sky-700"
                onClick={() => resetGame(100)}
            >
                Reset Game
            </button>
        </>
    );
}
