import styled from 'styled-components';

export const Container = styled.div`
	width: 1000px;
	max-width: 100%;
	padding: 0 20px;
	margin: 0 auto;
	flex-wrap: wrap;
	display: grid;
	grid-template-columns: repeat(4,minmax(0px,1fr));
  	grid-column-gap: 30px;
  	grid-row-gap: 30px;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 200px;
		max-width: 100%;
		flex-direction: column;
		justify-content: center;
		grid-template-columns: repeat(1,minmax(0px,1fr));
  		grid-column-gap: 15px;
  		grid-row-gap: 15px;
	}
`;
