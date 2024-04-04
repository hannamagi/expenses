import {useRef, useState, Fragment} from "react";
import "./ExpenseForm.css";
import Error from "../UI/Error"

const ExpenseForm = (props) => {
    //const [enteredTitle, setEnteredTitle] = useState("");
    //const [enteredAmount, setEnteredAmount] = useState("");
    //const [enteredDate, setEnteredDate] = useState("");

    const [error, setError] = useState(null);

    const errorHandler = () => {
        setError(null);
    }
    console.log(error)
    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();
        setEnteredTitle(event.target.value);
    };

    /*const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    };*/

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

        console.log(
            enteredTitle,
            enteredAmount,
            enteredDate
        );

        if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 ||
            enteredDate.trim().length === 0){
            setError({
                title: "Invalid input",
                message: "Please enter a valid title, amount and date (non-empty values)."
            });
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);
        titleInputRef.current.value = '';
        amountInputRef.current.value = '';
        dateInputRef.current.value = '';
        //setEnteredTitle("");
        //setEnteredAmount("");
        //setEnteredDate("");
    };

const cancelHandler = () => {
    props.onCancel();
};

    return (
        <Fragment>
            {error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />)
            }
            <div>
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input
                                type="text"
                                //value={enteredTitle}
                                //onChange={titleChangeHandler}
                                ref={titleInputRef}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input
                                type="number"
                                min="0.01"
                                step="0.01"
                                //value={enteredAmount}
                                //onChange={amountChangeHandler}
                                ref={amountInputRef}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input
                                type="date"
                                min="2022-01-01"
                                max="2025-12-31"
                                //value={enteredDate}
                                //onChange={dateChangeHandler}
                                ref={dateInputRef}
                            />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="button" onClick={cancelHandler}>
                            Cancel
                        </button>
                        <button type="submit">Add Expense</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default ExpenseForm;