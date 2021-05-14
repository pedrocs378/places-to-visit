import styled from "styled-components";

export const Container = styled.form`

	

	> div {
		display: flex;
		align-items: center;

		img {
			width: 100%;
			max-width: 60px;
		}

		h3 {
			text-transform: uppercase;
			color: var(--green-500);
			margin-left: 1rem;
		}
	}

	main {
		margin: 2rem 0 1.5rem;
		display: flex;
		flex-direction: column;

		div {
			width: 100%;
			margin-bottom: 1.5rem;

			display: flex;
			flex-direction: column;

			label {
				color: var(--black);
				margin-bottom: 3px;
			}

			input {
				height: 3rem;
				border: 1px solid var(--black);
				border-radius: 7px;
				padding: 0 1.125rem;
				font-size: 1rem;

				&::placeholder {
					color: var(--gray-550);
				}
			}
		}
	}

	@media (min-width: 720px) {

		main {
			flex-direction: row;

			div {
				margin-bottom: 0;
				margin-right: 1rem;

				&.update-place {
					width: 100%;
				}
				&.update-goal {
					width: 100%;
					max-width: 8rem;
				}
			}
		}
	}
`