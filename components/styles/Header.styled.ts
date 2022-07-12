import styled, { css } from 'styled-components';
import { ArrowBack } from '@styled-icons/ionicons-outline/ArrowBack'

export const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.header};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	padding: 20px 0;

	div {
		display: flex;
		align-items: flex-start;
	}
`;
