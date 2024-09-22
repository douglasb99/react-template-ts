import React from 'react';
import ExpenseRow from './ExpenseRow.tsx';
import { Expense } from './types.ts';

interface ExpenseTableProps {
    expenses: Expense[];
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses }) => {
    const tableHeaders = ['Date', 'Merchant', 'Amount', 'Category', 'Description', 'Status'];

    return (
        <div className="flex flex-col items-center p-4 w-3/4 mx-auto">
            <h1 className="text-xl font-bold mb-2 text-center">Expenses</h1>
            <hr className="border-t-2 mb-4 w-full w-3/4" />
            <table className="border-collapse w-full">
                <thead>
                <tr>
                    {tableHeaders.map((header) => (
                        <th key={header} className="px-4 text-left">{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {expenses.map((expense) => (
                    <ExpenseRow key={expense.id} expense={expense} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseTable;
