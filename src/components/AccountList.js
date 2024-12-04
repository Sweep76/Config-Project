// src/components/AccountList.js
import React from 'react';
import Account from './Account';
import accounts from '../data/accounts';

const AccountList = () => {
  return (
    <div className="account-list">
      {accounts.map(account => (
        <Account key={account.id} account={account} />
      ))}
    </div>
  );
};

export default AccountList;
