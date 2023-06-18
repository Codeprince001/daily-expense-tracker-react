import React from 'react';
import { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const sign = transactionType === "expense" ? -1 : +1;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000000),
      text,
      amount: sign * +amount
    };

    addTransaction(newTransaction);

  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="transaction-type">
          <label htmlFor="expense">
            <input type="radio" id="expense" name="transaction" value="expense" onClick={(e) => setTransactionType("expense")} />Expense
          </label>
          <label htmlFor="income">
            <input type="radio" id="income" name="transaction" value="income" onClick={(e) => setTransactionType("income")} />Income
          </label>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
