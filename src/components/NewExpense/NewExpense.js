import React, { useState }from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isActiveForm, setActiveForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData); // This is a function pointer to the function in App.js
    setActiveForm(false);
  }

  const displayFormHandler = () =>{
    setActiveForm(true);
  }

  const hideFormHandler = () => {
    setActiveForm(false);
  }

  return (
    <div className="new-expense">
      {!isActiveForm && <button onClick={displayFormHandler}>Add new expense</button>}
      {isActiveForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler}/>}
    </div>
  );
};

export default NewExpense;
