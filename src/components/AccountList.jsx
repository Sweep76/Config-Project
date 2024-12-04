// src/components/AccountList.jsx
import React, { useState } from 'react';
import Account from './Account';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import TransactionHistory from './TransactionHistory';
import accountsData from '../data/accounts';

const AccountList = () => {
  const [accounts, setAccounts] = useState(accountsData);
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = (id, amount) => {
    setAccounts((prev) =>
      prev.map((account) =>
        account.id === id ? { ...account, balance: account.balance + amount } : account
      )
    );
    setTransactions((prev) => [...prev, `Deposited $${amount} to account ID ${id}`]);
  };

  const handleWithdraw = (id, amount) => {
    setAccounts((prev) =>
      prev.map((account) =>
        account.id === id ? { ...account, balance: account.balance - amount } : account
      )
    );
    setTransactions((prev) => [...prev, `Withdrew $${amount} from account ID ${id}`]);
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
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default AccountList;
