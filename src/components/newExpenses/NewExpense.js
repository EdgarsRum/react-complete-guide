import ExpenseForm from './ExpenseForm';

import './NewExpense.css'
import {useState} from 'react';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => setShowForm(true);
  const hideFormHandler = () => setShowForm(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    hideFormHandler();
  }

  return (
    <div className="new-expense">
      {
        showForm
          ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler}/>
          : <button onClick={showFormHandler} type="button">Add New Expense</button>
      }
    </div>
  );
};

export default NewExpense;
