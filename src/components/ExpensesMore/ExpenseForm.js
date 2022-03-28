import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = ({ onSaveExpense, onCancel }) => {

    const [inputData, setInputData] = useState({
        title: '',
        amount: '',
        date: ''
    })
    const titleChanged = (event) => {
        //this isn't a corrent way, because you update the state dependeing on your previous state
        // setInputData({
        //     ...inputData,
        //     title: event.target.value
        // })
        setInputData((preState) => {
            return {
                ...preState,
                title: event.target.value
            }
        });
    }
    const amountChanged = (event) => {
        //this isn't a corrent way, because you update the state dependeing on your previous state
        // setInputData({
        //     ...inputData,
        //     amount: event.target.value
        // })
        setInputData((preState) => {
            return {
                ...preState,
                amount: event.target.value
            }
        });
    }
    const dateChanged = (event) => {
        setInputData((preState) => {
            return {
                ...preState,
                date: event.target.value
            }
        });
    }

    const submitForm = (event) => {
        event.preventDefault();
        const input = {
            title: inputData.title,
            amount: inputData.amount,
            date: new Date(inputData.date)
        }
        if (input.title && input.amount && input.date) {
            onSaveExpense(input);
        } else alert("Please fill out the form.")
    }
    return (
        <form onSubmit={submitForm}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text'
                        value={inputData.title}
                        onChange={titleChanged} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'
                        value={inputData.amount}
                        onChange={amountChanged} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'
                        value={inputData.date}
                        onChange={dateChanged} />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit' onClick={onCancel}>Cancel</button>
                    <button type='submit'>Add to expense</button>
                </div>
            </div>
        </form>
    )
}