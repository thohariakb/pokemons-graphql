import React from 'react';
import Head from 'next/head';
import { StyledFooter, BackButton } from './styles/Footer.styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
	hasBackButton: Boolean;
}

const Footer: React.FC<Props> = ({ hasBackButton }) => {
	const router = useRouter();

	return (
		<>
			<StyledFooter>
				{hasBackButton && (
					<BackButton aria-label="back button" onClick={() => router.back()} />
				)}
			</StyledFooter>
		</>
	);
};

export default Footer;
