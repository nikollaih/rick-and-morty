import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import CharacterCard from '../ui/CharacterCard';
import { MemoryRouter } from 'react-router-dom';
import useSoftDelete from "../hooks/useSoftDelete";

jest.mock("../hooks/useSoftDelete");

describe("CharacterCard", () => {
    let mockCharacter = {
        id: 1,
        name: "Rick",
        status: "Alive",
        gender: "Male",
        image: "https://example.com/rick.png",
        type: "",
        species: "Human"
    }

    it("renders correctly", () => {
        // Mock implementation with isDeleted and handleDeleted
        const mockIsDeleted = jest.fn().mockReturnValue(false);
        const mockHandleDeleted = jest.fn();

        // Mock the useSoftDelete behavior
        useSoftDelete.mockReturnValue({
            isDeleted: mockIsDeleted,
            handleDeleted: mockHandleDeleted
        });

        // Render the component
        render(
            <MemoryRouter initialEntries={['/']}>
                <CharacterCard character={mockCharacter}/>
            </MemoryRouter>
        );

        // Verify if the component to be rendering the information
        expect(screen.queryByText(mockCharacter.name)).toBeInTheDocument();
        expect(screen.queryByText(mockCharacter.species)).toBeInTheDocument();
    })

    it('should not render the card if character is deleted', () => {
        // Mock implementation with isDeleted and handleDeleted
        const mockIsDeleted = jest.fn().mockReturnValue(true);
        const mockHandleDeleted = jest.fn();

        // Mock the useSoftDelete behavior
        useSoftDelete.mockReturnValue({
            isDeleted: mockIsDeleted,
            handleDeleted: mockHandleDeleted
        });

        // render the component
        render(
            <MemoryRouter initialEntries={['/']}>
                <CharacterCard character={mockCharacter}/>
            </MemoryRouter>
        );

        // Verify the component doesn't render the character name
        expect(screen.queryByText(mockCharacter.name)).not.toBeInTheDocument();
        expect(screen.queryByText(mockCharacter.species)).not.toBeInTheDocument();
    });
})
