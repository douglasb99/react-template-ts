import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import './index.css'

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
    document.getElementById('root')
);