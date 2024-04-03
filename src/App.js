import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
        {
            id: "e1",
            date: new Date(2023, 0, 10),
            title: "New book",
            price: 30.99
        },
        {
            id: "e2",
            date: new Date(2024, 0, 10),
            title: "Hype Boy By NewJeans",
            price: 99.99
        },
        {
            id: "e3",
            date: new Date(2024,0,10),
            title: "Zimzalabim By Red Velvet",
            price: 69.69
        }
    ]
    const App = () => {
        const [expenses, setExpenses] = useState
        (DUMMY_EXPENSES)
        const addExpenseHandler = (expense) => {
            console.log("In App.js");
            setExpenses((prevExpenses) => {
                return [expense, ...prevExpenses];
            })
        }
        console.log(expenses);
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenseData={expenses}></Expenses>
        </div>
    );
}

export default App;