import {Expense} from "./types.ts";

export const fetchExpenses = async (): Promise<Expense[]> => {
    const response = await fetch(import.meta.env.VITE_API_URL!, {
        headers: {
            'Content-Type': 'application/json',
            'Username': import.meta.env.VITE_USERNAME!,
        },
    });

    //todo look at other possible API failures eg status codes and do they trigger this.
    if (!response.ok) {
        return Promise.reject(new Error(`API request failed with status ${response.status}`));
    }

    return response.json();
};


export const fetchFallbackData = async (): Promise<Expense[]> => {
    const response = await fetch('/data/fallbackData.json');
    if (!response.ok) {
        return Promise.reject(new Error(`API request failed with status ${response.status}`));
    }
    return response.json();
};