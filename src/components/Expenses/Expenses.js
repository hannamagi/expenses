import React, { useState } from 'react';
import ExpensesList from "./ExpensesList";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    console.log('Year data in Expenses.js ' + filteredYear);

    const filterChangeHandler = props.expenseData.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={setFilteredYear}></ExpensesFilter>
            <ExpensesList filterChangeHandler={filterChangeHandler}></ExpensesList>
        </Card>
    )
}
export default Expenses;