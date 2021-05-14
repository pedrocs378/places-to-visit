import styled from "styled-components"
import Select from 'react-select'

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

	> div {
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

		> div {
			margin-bottom: 0;
			margin-right: 2.125rem;

			&.country {
				max-width: 18.938rem;
			}
			&.place {
				max-width: 28.438rem;
			}
			&.goal {
				max-width: 14.875rem;
			}
		}
		
	}
`

export const CountriesSelect = styled(Select)`
	
	.react-select__control {
		border: 0;
		border-radius: 7px;
		background: var(--white);
		cursor: pointer;
		padding: 0 1rem;
		height: 3rem;
		
		font-weight: 400;

		&:hover {
			.react-select__dropdown-indicator {
				svg {
					color: var(--black);
				}
			}
		}
	}

	.react-select__control--is-focused {
		background: var(--white);
		box-shadow: none;
	}

	.react-select__indicator-separator {
		display: none;
	}
	
	.react-select__dropdown-indicator {
		svg {
			height: 18px;
			width: 18px;
			color: var(--gray-750);

			transition: color 0.2s;
		}
	}

	.react-select__placeholder {
		color: var(--gray-550);
	}

	.react-select__single-value {
		color: var(--black);
	}

	.react-select__menu {
		background-color: var(--white);
		color: var(--black);
		font-weight: 400;
		padding: 0.3rem 0;
	}

	.react-select__option {
		cursor: pointer;
		padding: 1rem 2rem;
	}

	.react-select__option--is-focused {
		background-color: var(--gray-400);
	}

	.react-select__option--is-selected {
		background-color: var(--gray-400);
		color: var(--black);
	}

	@media (min-width: 720px) {
		.react-select__option {
			padding: 0.6rem 2rem;
		}
	}
`