import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../extra-files/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const currentYear = new Date().getFullYear();
  const [enteredfilterDate, setFilteredData] = useState(currentYear);

  const getExpenseFilterDate = filterDate => {
    setFilteredData(filterDate);
  }

  const updateExpenseListOnFilter = props.items.filter((item) => {
      return item.date.getFullYear().toString() === enteredfilterDate.toString();
  });


  return (
      <div>
          <Card className="expenses">
              <ExpensesFilter
                  onExpenseFilterDateChange={getExpenseFilterDate}
                  setFilterDate={enteredfilterDate}
        />
              {updateExpenseListOnFilter.map((expense) => (
                  <ExpenseItem
                      key={expense.id}
                      title={expense.title}
                      amount={expense.amount}
                      date={expense.date}
                  />
              ))}
          </Card>
      </div>
  );
}

export default Expenses;
