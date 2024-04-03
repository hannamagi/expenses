import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const ExpenseFilterHandler = (selectedYear) => {
        console.log(selectedYear)
    }
    return (
        <Card className={'expenses'}>
            <ExpensesFilter onExpenseFilter={ExpenseFilterHandler}/>
            <ExpenseItem expenseData={props.expenseData[0]}/>
            <ExpenseItem expenseData={props.expenseData[1]}/>
        </Card>
    );
}
export default Expenses;