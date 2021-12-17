
import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [displayForm, setDisplayForm] = useState(false);

    // let displayExpenseForm = true;

    const resetInput = () => {
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount('');
    }


    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        if (expenseData.title.length > 0 && expenseData.amount.length > 0 && expenseData.date) {     
            resetInput();
            setDisplayForm(false);
        }
    }

    const closeExpenseformHandler = () => {
        setDisplayForm(false);
    }

    const showExpenseFormhandler = () => {
        setDisplayForm(true);
    }

    return (
        <div>
            {displayForm === true ? (
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input
                                type="text"
                                onChange={titleChangeHandler}
                                value={enteredTitle}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input
                                type="number"
                                min="0.01"
                                step="0.01"
                                onChange={amountChangeHandler}
                                value={enteredAmount}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input
                                type="date"
                                min="2021-01-01"
                                max="2022"
                                onChange={dateChangeHandler}
                                value={enteredDate}
                            />
                        </div>
                        <div className="new-expense__control">
                            <div className="new-expense__actions">
                                <button onClick={closeExpenseformHandler}>
                                    Cancel
                                </button>
                                <button type="submit">Add Expense</button>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <button onClick={showExpenseFormhandler}>Add Expense</button>
            )}
        </div>
    );
}

export default ExpenseForm;