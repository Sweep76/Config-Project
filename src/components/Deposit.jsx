// src/components/Deposit.jsx
import React, { useState } from 'react';

const Deposit = ({ account, onDeposit }) => {
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    onDeposit(account.id, amount);
    setAmount(0);
  };

  return (
    <div>
      <h3>Deposit to {account.name}</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default Deposit;
