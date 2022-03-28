import { useState } from 'react';
import { ExpenseMore } from '../components/ExpensesMore/ExpenseMore';
import { Expense } from '../components/Expenses/Expense'

const initialExpenses = [
    {
        id: 'ex1',
        title: 'Kitchen',
        amount: 9004.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'ex2',
        title: 'Printer',
        amount: 100.8,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'ex3',
        title: 'Shopping',
        amount: 2490.65,
        date: new Date(2022, 2, 28),
    },
    {
        id: 'ex4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const ExpensesPage = () => {
    const [expenses, setExpenses] = useState(initialExpenses);

    const addExpense = expense => {
        setExpenses((preExpense) => {
            return [...preExpense, expense]
        })
    }

    return (
        <>
            <ExpenseMore onAddExpense={addExpense} />
            <Expense expenses={expenses} />
        </>
    )
}

export default ExpensesPage;