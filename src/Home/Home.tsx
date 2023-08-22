import { useEffect, useState } from 'react';
import GiftList from '../GiftList/GiftList';
import TotalGifts from '../TotalGifts/TotalGifts';
import checkEmptyString from '../utils/helper';

//ESTE COMPONENTE HOME CONTIENE LA PARTE DE GIFTS Q ESTABA EN APP

const Home: React.FC = () => {
  const [gifts, setGifts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Se ha modificado gifts');
    const handleResize = () => {
      console.log('La ventana se ha redimensionado');
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [gifts]);

  const addGift = () => {
    const newGift: string = prompt('¿Qué regalo quieres añadir?') as string;
    if (checkEmptyString(newGift)) {
      setGifts([...gifts, newGift]);
    }
  };

  return (
    <div className='app-wrapper'>
      <h1>Lista de regalos</h1>
      <GiftList gifts={gifts} addGift={addGift} />
      <TotalGifts totalGifts={gifts.length} />
      {/* <button>
        <a href={`/`}>Ir a Home</a>
      </button> */}
    </div>
  );
};

export default Home;
