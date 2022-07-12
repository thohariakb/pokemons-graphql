import '../styles/globals.ts';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globals';
import theme from '../styles/theme';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';

function MyApp({ Component, pageProps }: AppProps) {
	const client = new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
		}),
		cache: new InMemoryCache(),
	});
	return (
		<>
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Component {...pageProps} />
				</ThemeProvider>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
