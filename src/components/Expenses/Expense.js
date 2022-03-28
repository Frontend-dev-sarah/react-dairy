import { useState } from 'react';
import { Card } from "../UI/Card/Card";
import { ExpenseFilter } from "../Filter/ExpenseFilter";
import './Expense.css';
import { ExpenseList } from './ExpenseList';
import { Chart } from '../Chart/Chart';

const chartData = [
    { month: 'Jan', value: 0 },
    { month: 'Feb', value: 0 },
    { month: 'Mar', value: 0 },
    { month: 'Apr', value: 0 },
    { month: 'May', value: 0 },
    { month: 'Jun', value: 0 },
    { month: 'Jul', value: 0 },
    { month: 'Aug', value: 0 },
    { month: 'Sep', value: 0 },
    { month: 'Oct', value: 0 },
    { month: 'Nov', value: 0 },
    { month: 'Dec', value: 0 },
]

export const Expense = ({ expenses }) => {
    const [filterYear, setFilterYear] = useState('all');

    const filterChanged = (value) => {
        setFilterYear(value)
    }

    const filteredExpenses = expenses.filter((expense) => {
        const year = expense.date.getFullYear().toString();
        return filterYear === 'all' ? true : year === filterYear
    });

    for (let expense of filteredExpenses) {
        const expenseIndex = expense.date.getMonth();
        chartData[expenseIndex].value += expense.amount
    }
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChanged} />
            <Chart chartData={chartData} />
            <ExpenseList filteredExpenses={filteredExpenses} />
        </Card>
    )
}