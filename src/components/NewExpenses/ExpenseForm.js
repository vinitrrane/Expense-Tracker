import React, { useState } from "react";
import './ExpenseForm.css'
import NewExpense from "./NewExpense";

const ExpenseForm = (props) => {

    const [title, setNewTitle] = useState("");
    const [amount, setNewAmount] = useState("");
    const [date, setNewDate] = useState("");

    const titleChangeHandler = (e) => {
        setNewTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setNewAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setNewDate(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        }

        props.onSaveExpenseData(expenseData);

        setNewTitle("");
        setNewAmount("");
        setNewDate("");
    }

    return (
        <form onSubmit={formSubmit} >
            <div className="new-expense_controls">

                <div className="new-expense_controls">
                    <label>Expense Name</label>
                    <input type="text" onChange={titleChangeHandler} value={title} required />
                </div>

                <div className="new-expense_controls">
                    <label> Expense Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount} required />
                </div>

                <div className="new-expense_controls">
                    <label> Expense Date</label>
                    <input type="date" onChange={dateChangeHandler} value={date} required />
                </div>

            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form >
    );
}
export default ExpenseForm;