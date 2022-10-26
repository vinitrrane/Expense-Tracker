import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseData = (newExpenseData) => {

        const expenseData = {
            id: Math.random().toString(),
            ...newExpenseData
        }

        props.onAddExpense(expenseData);

    }


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>
    );
}

export default NewExpense;