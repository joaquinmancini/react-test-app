import { useState } from "react";
import GiftList from "./GiftList/GiftList";
import checkEmptyString from "./utils/helper.js";
import TotalGifts from "./TotalGifts/TotalGifts.js";
import "./App.css";

const App: React.FC = () => {
  const [gifts, setGifts] = useState<string[]>([]);

  const addGift = () => {
    const newGift: string = prompt("¿Qué regalo quieres añadir?") as string;
    if (checkEmptyString(newGift)) {
      setGifts([...gifts, newGift]);
    }
  };

  return (
    <>
      <div className="app-wrapper">
        <h1>Lista de regalos</h1>
        <GiftList gifts={gifts} addGift={addGift} />
        <TotalGifts totalGifts={gifts.length} />
      </div>
    </>
  );
};

export default App;
