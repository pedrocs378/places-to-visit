import styled from "styled-components"

export const Container = styled.div`
	background: var(--green-500);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem 0;

	@media (min-width: 720px) {
		padding: 0;
		height: 12.688rem;
	}
`

export const Content = styled.form`
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;

	div {
		width: 100%;
		margin-bottom: 1.5rem;

		display: flex;
		flex-direction: column;

		label {
			color: var(--white);
			margin-bottom: 3px;
		}

		input {
			height: 3rem;
			border-radius: 7px;
			border: 0;
			padding: 0 1.125rem;
			font-size: 1rem;

			&::placeholder {
				color: var(--gray-550);
			}
		}
	}

	@media (min-width: 720px) {
		flex-direction: row;
		align-items: center;

		div {
			margin-bottom: 0;
		}
	}
`