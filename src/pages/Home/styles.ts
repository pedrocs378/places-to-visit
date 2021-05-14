import styled from 'styled-components'

export const Container = styled.main``

export const PlaceCardsContainer = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 3.313rem 1rem;

	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 1.875rem;

	@media (min-width: 720px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (min-width: 1080px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	@media (min-width: 1400px) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
`
