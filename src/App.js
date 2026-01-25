import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  // add expense
  const addExpense = () => {
    if (title === "" || amount === "") return;

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
  };

  // delete expense
  const deleteExpense = (id) => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(filteredExpenses);
  };

  // total amount
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ₹{expense.amount}
            <button onClick={() => deleteExpense(expense.id)}>❌</button>
          </li>
        ))}
      </ul>

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default App;
