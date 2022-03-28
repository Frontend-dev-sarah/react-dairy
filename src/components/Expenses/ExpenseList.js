import { ExpenseItem } from "./ExpenseItem";
import './ExpenseList.css';

export const ExpenseList = ({ filteredExpenses }) => {
    return (
        <ul className="expenses-list">
            {filteredExpenses.length === 0
                ? <h2 className='expenses-list__fallback'>No expenses in the selected year.</h2>
                : filteredExpenses.map((expense) =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />)}
        </ul>
    )
}