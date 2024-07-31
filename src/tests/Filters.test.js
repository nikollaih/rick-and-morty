import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Filters from "../ui/Filters";
import { MemoryRouter, useSearchParams } from 'react-router-dom';

// Mock useSearchParams
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useSearchParams: jest.fn(),
}));

describe('Filters', () => {

    it('status filters buttons work as expected', () => {
        // Mock the return value of useSearchParams
        const mockSearchParams = new URLSearchParams({ status: 'Alive' });

        // Mock the useSearchParams behavior
        (useSearchParams).mockReturnValue([mockSearchParams]);

        // Render the component
        render(
            <MemoryRouter initialEntries={['/']}>
                <Filters />
            </MemoryRouter>
        );

        // Get two of the filters, one of them should be active
        let aliveFilterButton = screen.getByText("Alive").parentNode;
        let deadFilterButton = screen.getByText("Dead").parentNode;

        // Check if it has the "active" class and the another one doesn't
        expect(aliveFilterButton).toHaveClass('active');
        expect(deadFilterButton).not.toHaveClass('active');
    })

    it('gender filters buttons work as expected', () => {
        // Mock the return value of useSearchParams
        const mockSearchParams = new URLSearchParams({ gender: 'Female' });

        (useSearchParams).mockReturnValue([mockSearchParams]);

        render(
            <MemoryRouter initialEntries={['/']}>
                <Filters />
            </MemoryRouter>
        );

        // Get two of the filters, one of them should be active
        let femaleFilterButton = screen.getByText("Female").parentNode;
        let maleFilterButton = screen.getByText("Male").parentNode;

        // Check if it has the "active" class and the another one doesn't
        expect(femaleFilterButton).toHaveClass('active');
        expect(maleFilterButton).not.toHaveClass('active');
    })
})
