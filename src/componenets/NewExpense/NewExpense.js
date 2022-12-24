import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
  const [isEditing,setisEditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
      const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
      };
      props.onAddExpense(expenseData);
      setisEditing(false);
    };
    const starteditingHandler=()=>{
      setisEditing(true);
    }
const cancelHandler=()=>{
  setisEditing(false);
}

    return (<div className="new-expense">
{  !isEditing && <button onClick={starteditingHandler} >Add new Expense</button>
}      
{isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>
}        </div>
    );
};
export default NewExpense;