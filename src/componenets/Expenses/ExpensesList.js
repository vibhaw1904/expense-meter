import React from "react";
import Expenseitem from "./Expenseitem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No expenses</h2>;
  }
function mappingExpense(expense){
  return(
    <Expenseitem
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
  );
}
  return (
    <ul className="expenses-list">
      {props.items.map((mappingExpense) )}

    </ul>
  );
};
export default ExpensesList;
