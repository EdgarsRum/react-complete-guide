import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return <div className="expenses">
    {
      props.expenses.map((expense =>
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            subject={expense.subject}
            amount={expense.amount}
          />
      ))
    }
  </div>
}

export default Expenses;