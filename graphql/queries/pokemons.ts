import { gql } from '@apollo/client'

export const QUERY_POKEMONS = gql`
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    results {
      name
      image
    }
  }
}
`
