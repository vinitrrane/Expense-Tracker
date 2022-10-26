import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // console.log(props.date)
    return (

        <Card className="expense-item">

            <ExpenseDate date={props.date} />

            <div className="expense-item-details">
                <h2>{props.title}</h2>
                <div className="expense-item-price"> &#8377; {props.amount}</div>

            </div>


        </Card >
    );
}

export default ExpenseItem;