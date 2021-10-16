import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../ui/Card';

import './Expenses.css';
import {useState} from 'react';

function Expenses(props) {

  const [year, setYear] = useState('');

  const filterByYearHandler = (year) => setYear(year);

  const filterByYear = (expense) => year === '' || expense.date.getFullYear().toString() === year

  return <Card className="expenses">
    <ExpensesFilter onFilterByYear={filterByYearHandler}/>
    {
      props.expenses
        .filter(filterByYear)
        .map(expense =>
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />)
    }
  </Card>
}

export default Expenses;
