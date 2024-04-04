import App from './App';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    test('render input field and add task button', () => {
        render(<App />);

        const inputTaskLabel = screen.getByRole('textbox', {
            name: 'Add task',
        });
        const addTaskBtn = screen.getByRole('button', { name: 'Add new task' });

        expect(inputTaskLabel).toBeInTheDocument();
        expect(addTaskBtn).toBeInTheDocument();
    });
});
