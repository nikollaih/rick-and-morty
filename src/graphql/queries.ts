import {gql} from "@apollo/client";

// GraphQL query to get the filtered characters
export const GET_CHARACTERS = gql`
  query Characters($page: Int, $query: String, $status: String, $gender: String, $specie: String) {
      characters (page:$page, filter: { name: $query, status: $status, gender: $gender, species: $specie }) {
        results {
          id
          name
          image
          species
        }
        info {
          count
          pages
          next
          prev
        }
      }
    } 
`;

// GraphQL query to get a character information
export const GET_CHARACTER_DETAILS = gql`
  query GetCharacter($id: ID!) {
      character(id: $id) {
        id
        name
        image
        species
        status
        gender
        type
        episode {
            id
        }
    }
  }
`;
