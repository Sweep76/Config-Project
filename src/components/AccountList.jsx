// Add this to AccountList.jsx
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
