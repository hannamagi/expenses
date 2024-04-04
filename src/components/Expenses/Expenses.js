import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    console.log('Year data in Expenses.js ' + filteredYear);

    const filterChangeHandler = props.expenseData.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No expenses found.</p>
    if(filterChangeHandler.length > 0) {
        expensesContent = filterChangeHandler.map((expense) => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.price}
            ></ExpenseItem>
        })
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={setFilteredYear}></ExpensesFilter>
            {expensesContent}
        </Card>
    )
}
export default Expenses;