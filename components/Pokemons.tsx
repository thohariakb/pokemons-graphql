import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { StyledCard } from './styles/Card.styled';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POKEMONS } from '../graphql/queries/pokemons';
import { QueryPokemons } from '../graphql/generated/QueryPokemons';

interface Props {}

const Pokemons: React.FC<Props> = () => {
	const { data, loading, error } = useQuery<QueryPokemons>(QUERY_POKEMONS);

	return (
		<>
			{data?.pokemons?.results?.map((pokemon: any, index: number) => (
				<Link key={index} href="/[pokemon_name]" as={`/${pokemon.name}`}>
					<StyledCard>
						<Image
							src={pokemon.image}
							width={100}
							height={100}
							alt="pokemon-pic"
						/>

						<h3>{pokemon.name}</h3>
					</StyledCard>
				</Link>
			))}
		</>
	);
};

export default Pokemons;
