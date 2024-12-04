// src/components/AccountList.jsx
import React, { useState } from 'react';
import Account from './Account';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import accountsData from '../data/accounts';

const AccountList = () => {
  const [accounts, setAccounts] = useState(accountsData);

  const handleDeposit = (id, amount) => {
    setAccounts((prev) =>
      prev.map((account) =>
        account.id === id ? { ...account, balance: account.balance + amount } : account
      )
    );
  };

  const handleWithdraw = (id, amount) => {
    setAccounts((prev) =>
      prev.map((account) =>
        account.id === id ? { ...account, balance: account.balance - amount } : account
      )
    );
  };

  return (
    <div className="account-list">
      {accounts.map((account) => (
        <div key={account.id}>
          <Account account={account} />
          <Deposit account={account} onDeposit={handleDeposit} />
          <Withdraw account={account} onWithdraw={handleWithdraw} />
        </div>
      ))}
    </div>
  );
};

export default AccountList;
