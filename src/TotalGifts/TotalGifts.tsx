interface TotalGiftsProps {
    totalGifts: number;
}
const TotalGifts: React.FC<TotalGiftsProps> = ({ totalGifts }) => {
  return (
    <>
      <h2>Total de regalos</h2>
      <p>{totalGifts}</p>
    </>
  );
}

export default TotalGifts;