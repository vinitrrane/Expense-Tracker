import React, { useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense'

let dummy_expenses = [];

const App = () => {

  const [expenses, setExpenses] = useState(dummy_expenses);


  // useEffect(() => {
  //   const baseURL = 'https://api.sampleapis.com/bitcoin/historical_prices';
  //   fetch(baseURL)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       setExpenses(data);
  //     });
  // }, []);


  const addExpenseHandler = (e) => {

    const updatedExpenses = [e, ...expenses];
    setExpenses(updatedExpenses);
  }

  return (
    <div className="App">

      <h2>Expense Tracker</h2>

      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses item={expenses} />

    </div>

  );
}

export default App;
