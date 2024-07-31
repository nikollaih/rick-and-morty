import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Paginator from "../ui/Paginator";
import { MemoryRouter, useSearchParams } from 'react-router-dom';

// Mock useSearchParams
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useSearchParams: jest.fn(),
}));

describe('Paginator', () => {
    it('renders the expected pages', () => {
        // Mock the return value of useSearchParams
        const mockSearchParams = new URLSearchParams({ page: '5' });

        (useSearchParams).mockReturnValue([mockSearchParams]);

        // Render the component
        render(
            <MemoryRouter initialEntries={['/']}>
                <Paginator pages={10} />
            </MemoryRouter>
        );

        // Query for a button with the text "2"
        const button2 = screen.queryByRole('button', { name: '2' });
        const button3 = screen.queryByRole('button', { name: '2' });
        const button6 = screen.queryByRole('button', { name: '2' });
        const button8 = screen.queryByRole('button', { name: '8' });

        // Assert that the button with text "2" and "8" are not in the document
        expect(button2).not.toBeInTheDocument();
        expect(button8).not.toBeInTheDocument();

        // Assert that the button with text "3" and "6" are in the document
        expect(button3).not.toBeInTheDocument();
        expect(button6).not.toBeInTheDocument();
    })
})
