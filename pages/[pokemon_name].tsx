import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { StyledCard } from '../components/styles/Card.styled';
import { Container } from '../components/styles/Container.styled';
import { FlexColumn } from '../components/styles/Flex.styled';
import {
	QueryPokemon,
	QueryPokemonVariables
} from '../graphql/generated/QueryPokemon';
import { QUERY_POKEMON } from '../graphql/queries/pokemon';

interface Props {}

const PokemonDetail: React.FC<Props> = () => {
	const router = useRouter();

	const { pokemon_name } = router.query;

	const { data } = useQuery<QueryPokemon, QueryPokemonVariables>(
		QUERY_POKEMON,
		{
			variables: { name: `${pokemon_name}` },
		}
	);

	return (
		<>
			<Header />
			<FlexColumn>
				<StyledCard>
					<Container>
						<div>
							<ul>
								<li>
									<h3>{`Name: ${data?.pokemon.name}`}</h3>
									<h3>{`Height: ${data?.pokemon.height}`}</h3>
								</li>
								<li>
									<h3>{`Weight: ${data?.pokemon.weight}`}</h3>
								</li>
							</ul>
						</div>
						<div>
							<h3>Abilities:</h3>

							<ol>
								{data?.pokemon?.abilities?.map((item, i) => (
									<li key={i}>{`${item.ability?.name}`}</li>
								))}
							</ol>
						</div>
						<div>
							<h3>Stats:</h3>

							<ol>
								{data?.pokemon?.stats?.map((item, i) => (
									<li key={i}>{`${item.stat.name}: ${item.base_stat}`}</li>
								))}
							</ol>
						</div>
						<div>
							<h3>Types:</h3>

							<ol>
								{data?.pokemon?.types?.map((item, i) => (
									<li key={i}>{`${item.type.name}`}</li>
								))}
							</ol>
						</div>
					</Container>
				</StyledCard>
			</FlexColumn>

			<Footer hasBackButton />
		</>
	);
};

export default PokemonDetail;
