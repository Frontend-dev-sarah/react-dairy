import './ExpenseMore.css';
import { ExpenseForm } from './ExpenseForm';
import { useState } from 'react';


export const ExpenseMore = ({ onAddExpense }) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpense = (inputData) => {
        const expenseData = {
            ...inputData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData);
    }
    const renderForm = () => {
        if (showForm) {
            return <ExpenseForm onSaveExpense={saveExpense} onCancel={() => setShowForm(false)} />
        }
        return (
            <div className='new-expense__add'>
                <button type='submit' onClick={() => setShowForm(true)}>Add New Expense</button>
            </div>)
    }
    return (
        <div className='new-expense'>
            {renderForm()}
        </div>
    )
}