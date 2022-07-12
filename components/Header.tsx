import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { StyledHeader } from './styles/Header.styled';

interface Props {}

const Header: React.FC<Props> = () => {
	return (
		<>
			<StyledHeader>
				<Head>
					<title>Pokemon</title>
				</Head>

				<Image
					src="/img/pokemon-logo.svg"
					width={200}
					height={100}
					alt="pokemon-logo"
				/>
			</StyledHeader>
		</>
	);
};

export default Header;
