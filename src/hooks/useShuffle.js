// import { useEffect, useState } from "react";



// useShuffle
export const useShuffle = (array) => {
  // const [shuffledArray, setShuffledArray] = useState([]);

  // useEffect(() => {
  //     const shuffledCards = () => {
  //         return cards.sort(() => Math.random() - 0.5);
  //     };
  //     setShuffledArray(shuffledCards());
  // }, []);
  // console.log(shuffledArray);

  return array.sort(() => Math.random() - 0.5);
};
