import styled from 'styled-components';

export const StyledCard = styled.div`
	align-items: center;
	justify-content: center;
	margin: 40px auto;
	padding: 1rem;
	background-color: #fff;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

	img {
		width: 80%;
	}

	& > div {
		flex: 1;
	    text-align: center;
	}

	& > div > ul > li > h3 {
	    text-align: start;
	}


	& > div > h3 {
		text-align: center;
		margin: 20px 0;
		color: ${({ theme }) => theme.colors.pokemonText}
	}

	h3 {
		margin: 20px 0;
		color: ${({ theme }) => theme.colors.pokemonText}
	}


	li {
		list-style: none;
		margin-bottom: 10px;
		color: ${({ theme }) => theme.colors.pokemonType}
	}


	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
	}
`;
