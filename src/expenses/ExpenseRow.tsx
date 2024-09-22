import React from 'react';
import { Expense } from './types.ts';
import { formatDate } from '../utils/formatDate.ts';
import { formatMoney } from '../utils/formatMoney.ts';

interface ExpenseRowProps {
    expense: Expense;
}

const ExpenseRow: React.FC<ExpenseRowProps> = ({ expense }) => {
    return (
        <tr className="capitalize">
            <td className="px-4" >{formatDate(expense.date)}</td>
            <td className="px-4">{expense.merchant}</td>
            <td className="px-4">{formatMoney(expense.amount)}</td>
            <td className="px-4">{expense.category}</td>
            <td className="px-4">{expense.description}</td>
            <td className="px-4">{expense.status}</td>
        </tr>
    );
};

export default ExpenseRow;
