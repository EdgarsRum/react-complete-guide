import ExpenseForm from './ExpenseForm';

import './NewExpense.css'
import {useState} from 'react';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const addNewExpenseHandler = (showForm) => setShowForm(showForm);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      {
        showForm
          ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseForm={addNewExpenseHandler}/>
          : <button onClick={() => addNewExpenseHandler(true)} type="button">Add New Expense</button>
      }
    </div>
  );
};

export default NewExpense;
