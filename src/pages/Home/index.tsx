
import { Header } from '../../components/Header'
import { PlaceCard } from '../../components/PlaceCard'
import { SearchArea } from '../../components/SearchArea'

import {
	Container,
	PlaceCardsContainer,
} from './styles'

export function Home() {

	return (
		<>
			<Header />

			<Container>
				<SearchArea />

				<PlaceCardsContainer>
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
				</PlaceCardsContainer>
			</Container>
		</>
	)
}