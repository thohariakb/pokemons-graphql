import React from 'react';
import Head from 'next/head';
import { StyledHeader } from './styles/Header.styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {}

const Header: React.FC<Props> = () => {
	const router = useRouter();

	return (
		<>
			<StyledHeader>
				<Head>
					<title>Pokemon</title>
				</Head>
				<div>
					<Image
						src="/img/pokemon-logo.svg"
						width={200}
						height={100}
						alt="pokemon-logo"
					/>
				</div>
			</StyledHeader>
		</>
	);
};

export default Header;
