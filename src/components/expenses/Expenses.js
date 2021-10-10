import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';

import './Expenses.css';


function Expenses(props) {
  return <Card className="expenses">
    {
      props.expenses.map((expense =>
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            subject={expense.title}
            amount={expense.amount}
          />
      ))
    }
  </Card>
}

export default Expenses;