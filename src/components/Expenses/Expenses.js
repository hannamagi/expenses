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

    props.expenseData.map((expense) => {
        console.log(expense);
    })
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={setFilteredYear}></ExpensesFilter>
            {filterChangeHandler.map((expense) => {
                    return <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.price}
                    ></ExpenseItem>
                })
                }
        </Card>
    )
}
export default Expenses;