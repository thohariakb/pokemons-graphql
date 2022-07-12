import styled from 'styled-components';

export const FlexRow = styled.div`
	display: flex;
	flex-wrap: wrap;

	& > div,
	& > ul {
		flex: 1;
	}

	& > div > h3  {
		display: grid;
		grid-column: auto;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		text-align: center;
	}
`;

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	& > div,
	& > ul {
		flex: 1;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		text-align: center;
	}
`;
