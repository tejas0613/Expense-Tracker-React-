import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("All");
  let filteredExpenses = null;
  if(filteredYear === 'All'){
    filteredExpenses = props.items;
  } else{
    filteredExpenses = props.items.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );  
  }
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // filteredExpenses = props.items.filter(
    //   (expense) => expense.date.getFullYear === filteredYear
    // );
  };
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
