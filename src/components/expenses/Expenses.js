import {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../ui/Card';
import ExpensesList from './ExpensesList';

import './Expenses.css';

function Expenses(props) {

  const [year, setYear] = useState('');

  const filterByYearHandler = (year) => setYear(year);

  const filterByYear = (expense) => year === '' || expense.date.getFullYear().toString() === year
  const filteredExpenses = props.expenses.filter(filterByYear);

  return <Card className="expenses">
    <ExpensesFilter onFilterByYear={filterByYearHandler}/>
    <ExpensesList items={filteredExpenses}/>
  </Card>
}

export default Expenses;
