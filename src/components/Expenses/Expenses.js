import React, {useState} from 'react';

import ExpenseList from './ExpenseList';
import ExpensesFilter from '../extra-files/ExpensesFilter';
import ExpenseChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const currentYear = new Date().getFullYear();
  const [enteredfilterDate, setFilteredData] = useState(currentYear);

  const getExpenseFilterDate = filterDate => {
    setFilteredData(filterDate);
  }

  const updateExpenseListOnFilter = props.items.filter((item) => {
      return (
          item.date.getFullYear().toString() === enteredfilterDate.toString()
      );
  });

  return (
      <div>
          <Card className="expenses">
              <ExpensesFilter
                  onExpenseFilterDateChange={getExpenseFilterDate}
                  setFilterDate={enteredfilterDate}
              />
              <ExpenseChart filterData={updateExpenseListOnFilter} />
              <ExpenseList
                  items={updateExpenseListOnFilter}
                  selectedDate={enteredfilterDate}
                  filterData={updateExpenseListOnFilter}
              />
          </Card>
      </div>
  );
}

export default Expenses;
