// CharacterList.test.js
import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterCard from '../ui/CharacterCard';
import {ICharacterCard} from "../interfaces/Characters";
import useSoftDelete from "../hooks/useSoftDelete";

describe('CharacterCard', () => {
    // Separate test file
    test('useSoftDelete calls handleDeleted on delete click', () => {
        const mockHandleDeleted = jest.fn();
        jest.mock('../hooks/useSoftDelete', () => ({
            __esModule: true,
            default: jest.fn().mockImplementation(() => ({
                handleDeleted: mockHandleDeleted,
                isDeleted: jest.fn().mockReturnValue(false),
            })),
        }));

        const character: ICharacterCard = {
            id: 1,
            name: 'Rick Sanchez',
            species: 'Human',
            image: 'https://example.com/rick.jpg',
        };

        render(<CharacterCard character={character} />);
    });
});


