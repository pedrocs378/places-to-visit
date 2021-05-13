import styled from "styled-components";

export const Container = styled.button`
	height: 3rem;
	width: 100%;

	border: 0;
	border-radius: 7px;

	font-size: 1.125rem;
	background: var(--green-600);
	color: var(--white);

	@media (min-width: 720px) {
		align-self: flex-end;
		max-width: 12.688rem;
	}
`