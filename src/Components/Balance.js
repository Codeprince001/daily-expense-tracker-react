import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transactions => transactions.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id='balance'>
        ₦{total}
      </h1>
    </div>
  );
}
