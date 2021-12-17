import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
    let expenseContent = (
        <h2 className="expense-list__fallback">No expense found</h2>
    );

    if (props.filterData.length > 0) {
        expenseContent = props.filterData.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return expenseContent;
}

export default ExpenseList;