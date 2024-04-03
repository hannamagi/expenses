import ExpenseItem from "./ExpenseItem";

import "./Expenses.css"

function Expenses(props){
    return (
        <div className="expenses">
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </div>
    )
}

export default Expenses;