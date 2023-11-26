import React from 'react'
import GiftListProps from './GiftList'
// interface GiftListProps {
//   gifts: string[];
//   addGift: React.MouseEventHandler<HTMLButtonElement>;
// }
const GiftList: React.FC<any> = ({ gifts, addGift }) => {
  return (
    <>
      <h2>Regalos</h2>
      <ul>
        {gifts.map((gift: any) => (
          <li key={gift}>{gift}</li>
        ))}
      </ul>
      <button onClick={addGift}>Añadir regalo</button>
    </>
  )
}

export default GiftList
