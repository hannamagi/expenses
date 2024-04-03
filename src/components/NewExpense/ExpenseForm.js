import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
    }

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            date: new Date(event.target[2].value),
            price: event.target[1].value,
            title: event.target[0].value
        }
        props.onSaveExpenseData(expenseData)
    }
    return (
        <form  onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;