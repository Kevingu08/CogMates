import { Card } from "./Card";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Board() {
    const [cardsFlipped, setCardsFlipped] = useState([]);
    const [cardsMatched, setCardsMatched] = useState([]);

    const allowFlipCard = (card) => {
        if (cardsFlipped.length === 2 || cardsFlipped.includes(card)) {
            return false;
        }
        return true;
    };

    const checkMatch = () => {
        console.log("entro checkMatch");
        console.log(cardsFlipped[0].coupleId);
        
        if (cardsFlipped[0].coupleId === cardsFlipped[1].coupleId) {
            setCardsMatched(...cardsMatched, cardsFlipped[0], cardsFlipped[1]);
        } else {
            cardsFlipped[0].setActive(false);
            cardsFlipped[1].setActive(false);
        }

    };

    const addFlipCard = (card) => {
        setCardsFlipped([...cardsFlipped, card]);
        console.log("add card");
        if (cardsFlipped.length === 2) {
            console.log("checkMatch");
            checkMatch();
        }
    };

    useEffect(() => {
        if (cardsFlipped.length === 2) {
            // console.log("checkMatch");
            checkMatch();
        }
    }, [cardsFlipped])

    // const createCards = () => {
    //     // console.log(shuffledArray );
    //     return cardArray.map((card) => (
    //         <Card
    //             key={card.id}
    //             allowFlipCard={allowFlipCard}
    //             addCardFlipped={addFlipCard}
    //             coupleId={card.coupleId}
    //             content={card.content}
    //         />
    //     ));
    // };

    const cards = [
        { id: 1, coupleId: 1, content: "Kevin" },
        { id: 2, coupleId: 1, content: "Kevin" },
        { id: 3, coupleId: 2, content: "Isaac" },
        { id: 4, coupleId: 2, content: "Isaac" },
        { id: 5, coupleId: 3, content: "Marioneta" },
        { id: 6, coupleId: 3, content: "Marioneta" },
        { id: 7, coupleId: 4, content: "Hugo" },
        { id: 8, coupleId: 4, content: "Hugo" },
    ];

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] max-w-screen-xl gap-4">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    allowFlipCard={allowFlipCard}
                    addCardFlipped={addFlipCard}
                    coupleId={card.coupleId}
                    content={card.content}
                />
            ))}
        </div>
    );
}

Board.propTypes = {
    cardArray: PropTypes.array,
};
