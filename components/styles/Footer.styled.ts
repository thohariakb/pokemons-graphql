import styled, { css } from 'styled-components';
import { ArrowBack } from '@styled-icons/ionicons-outline/ArrowBack'

export const StyledFooter = styled.header`
	display: flex;
	align-items: center;
	position: absolute;
   	bottom:0;
	background-color: ${({ theme }) => theme.colors.header};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	padding: 20px 0;
	width:100%;
	height: 100px; 
	
	@media (max-width: ${({ theme }) => theme.mobile}) {
		visibility: hidden;
	}
`;

export const BackButton = styled(ArrowBack)`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    width: 3rem;
    height: 3rem;
	margin-left: 100px;
    cursor: pointer;
  `}
`