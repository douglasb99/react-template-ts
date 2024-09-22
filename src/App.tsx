import React, { useEffect, useState } from 'react';
import './index.css';
import { useQuery } from '@tanstack/react-query';
import { fetchExpenses, fetchFallbackData } from './expenses/api.ts'; // Import both API and fallback functions
import ExpenseTable from './expenses/ExpenseTable';
import {Expense} from "./expenses/types.ts";

const App: React.FC = () => {
    const [fallbackData , setFallbackData] = useState<Expense[] | null>(null);

    // Main useQuery hook for fetching expenses which implements polling to keep data up to date
    const { data: expenses = [], isLoading, isError, error } = useQuery({
        queryKey: ['expenses'],
        queryFn: fetchExpenses,
        refetchInterval: 60000,
    });

    // We fetch fallback data if the main API call fails
    useEffect(() => {
        if (isError) {
            const fetchFallback = async () => {
                try {
                    const fallback = await fetchFallbackData();
                    setFallbackData(fallback);
                } catch (fallbackError) {
                    setFallbackData([]);
                }
            };
            fetchFallback();
        }
    }, [isError]);

    if (isLoading) return <p>Loading...</p>;
    if (isError && fallbackData === null) return <p>{(error as Error).message}</p>;
    const dataToRender = fallbackData || expenses;

    return (
        <ExpenseTable expenses={dataToRender} />
    );
};

export default App;
