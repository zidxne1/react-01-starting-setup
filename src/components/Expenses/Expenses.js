import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import "./ExpensesFilter.css";

const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

//   const expenseItems = [];
//   props.expenses.forEach((e) =>
//     expenseItems.push(
//       <ExpenseItem title={e.title} date={e.date} cost={e.cost} />
//     )
//   );
//   return <div className="expenses">{expenseItems}</div>;
// }

export default Expenses;
