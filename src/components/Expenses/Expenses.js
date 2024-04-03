import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    console.log('Year data in Expenses.js ' + filteredYear);

    const filterChangeHandler = (selectedYear) => {
        console.log('Filter change handled by Expenses.js');
        console.log(selectedYear + ' is Expenses.js');
        setFilteredYear(selectedYear);
    }

    props.expenseData.map((expense) => {
        console.log(expense);
    })
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            {
                props.expenseData.map((expense) => {
                    return <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.price}
                        date={expense.date}
                    ></ExpenseItem>
                })
                }
        </Card>
    )
}
export default Expenses;