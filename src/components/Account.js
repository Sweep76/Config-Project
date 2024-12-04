// src/components/Account.js
import React from 'react';

const Account = ({ account }) => {
  return (
    <div className="account-card">
      <h2>{account.name}</h2>
      <p>Balance: ${account.balance}</p>
    </div>
  );
};

export default Account;
