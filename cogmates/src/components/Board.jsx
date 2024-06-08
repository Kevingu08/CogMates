import { Card } from "./Card";
import { useCard } from "./hooks/useCard";
import { useState } from "react";
import PropTypes from "prop-types";

export function Board() {
    const [cards, setCards] = useState(useCard());
    const [cardsFlipped, setCardsFlipped] = useState([]);
    const [cardsMatched, setCardsMatched] = useState([]);
    const [isBoardLocked, setIsBoardLocked] = useState(false);
    const [moves, setMoves] = useState(0);
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
    }

    const checkMatch = (newFlippedCards) => {
        const [firstCard, secondCard] = newFlippedCards;

        if (firstCard.coupleId === secondCard.coupleId) {
            firstCard.matched = true;
            secondCard.matched = true;
            setCardsMatched([...cardsMatched, firstCard, secondCard]);
            console.log(cardsMatched);
            setIsBoardLocked(false);
        } else {
            setTimeout(() => {
                firstCard.flipped = false;
                secondCard.flipped = false;
                setCards([...cards]);
                setIsBoardLocked(false);
            }, 700);
        }
    };

    return (
        <>
            <h2 className="text-2xl font-semibold mb-4">Moves: {moves}</h2>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] max-w-screen-xl gap-4">
                {cards.map((card) => (
                    <Card key={card.id} card={card} handleCard={handleCard} />
                ))}
            </div>
        </>
    );
}

Board.propTypes = {
    cardArray: PropTypes.array,
};
