import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
        {
            date: new Date(2023, 0, 10),
            title: "New book",
            price: 30.99
        },
        {
            date: new Date(2023, 0, 10),
            title: "Hype Boy By NewJeans",
            price: 99.99
        },
        {
        date: new Date(2023,0,10),
        title: "Zimzalabim By Red Velvet",
        price: 69.69
        }
    ]
    const App = () => {
        const addExpenseHandler = (expense) => {
            console.log("In App.js");
            console.log(expense);
        }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenseData={DUMMY_EXPENSES}></Expenses>
        </div>
    );
}

export default App;