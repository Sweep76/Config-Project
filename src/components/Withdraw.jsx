// src/components/Withdraw.jsx
import React, { useState } from 'react';

const Withdraw = ({ account, onWithdraw }) => {
  const [amount, setAmount] = useState(0);

  const handleWithdraw = () => {
    onWithdraw(account.id, amount);
    setAmount(0);
  };

  return (
    <div>
      <h3>Withdraw from {account.name}</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Withdraw;
