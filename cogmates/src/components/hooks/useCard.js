import { useEffect } from "react";

export const useCard = () => {
    let shuffledArray = [];

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

    const shuffledCards = () => {
        shuffledArray = cards.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        console.log("useEffect");
        shuffledCards();
        console.log(shuffledArray);
    });

    return shuffledArray;
};
