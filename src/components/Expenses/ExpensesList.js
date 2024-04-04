import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (props.filterChangeHandler.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {
                props.filterChangeHandler.map((expense) => {
                    return <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.price}
                    ></ExpenseItem>
                })
            }
        </ul>
    )
}

export default ExpensesList;