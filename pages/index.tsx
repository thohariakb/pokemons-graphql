import type { NextPage } from 'next';
import Header from '../components/Header';
import Pokemons from '../components/Pokemons';
import { Container } from '../components/styles/Container.styled';

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Container>
				<Pokemons />
			</Container>
		</>
	);
};

export default Home;
