// src/components/TransactionHistory.jsx
import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
