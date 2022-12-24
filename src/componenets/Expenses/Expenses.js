import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      
    
      
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onfilterchange={filterChangehandler}
        />
        <ExpenseChart expenses={filteredExpense}/>
        <ExpensesList items={filteredExpense} />
      </Card>
      
      </div>
  );
}
export default Expenses;
