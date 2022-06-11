import * as React from 'react';

const CurrencyConverter = () => {
  return (
    <div>
      <h2>Dollar to Rupiah</h2>
      <Amount>{(amount) => <Rupiah amount={amount} />}</Amount>
      <Amount>{(amount) => <Lyra amount={amount} />}</Amount>
    </div>
  );
};

const Amount = ({ children }) => {
  const [amount, setAmount] = React.useState(1);

  const handleIncrement = () => setAmount(amount + 1);
  const handleDecrement = () => {
    if (amount - 1 === 0) return;

    setAmount(amount - 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

      <p>Dollar: ${amount}</p>
      {children(amount)}
    </div>
  );
};

const Rupiah = ({ amount }) => <p>Rupiah: {amount * 14.614}</p>;
const Lyra = ({ amount }) => <p>Lyra: {amount * 17}</p>;

export default CurrencyConverter;
