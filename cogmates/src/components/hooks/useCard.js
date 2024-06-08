// import { useEffect, useState } from "react";

const cards = [
    { id: 1, coupleId: 1, content: "Kevin", flipped: false, matched: false},
    { id: 2, coupleId: 1, content: "Kevin", flipped: false, matched: false},
    { id: 3, coupleId: 2, content: "Isaac", flipped: false, matched: false},
    { id: 4, coupleId: 2, content: "Isaac", flipped: false, matched: false},
    { id: 5, coupleId: 3, content: "Marioneta", flipped: false, matched: false},
    { id: 6, coupleId: 3, content: "Marioneta", flipped: false, matched: false},
    { id: 7, coupleId: 4, content: "Hugo", flipped: false, matched: false},
    { id: 8, coupleId: 4, content: "Hugo", flipped: false, matched: false},
];

export const useCard = () => {
    // const [shuffledArray, setShuffledArray] = useState([]);

    // useEffect(() => {
    //     const shuffledCards = () => {
    //         return cards.sort(() => Math.random() - 0.5);
    //     };
    //     setShuffledArray(shuffledCards());
    // }, []);
    // console.log(shuffledArray);
    
    return cards.sort(() => Math.random() - 0.5);
};
