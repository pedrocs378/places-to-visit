
import { useCallback } from 'react'
import { Header } from '../../components/Header'
import { PlaceCard } from '../../components/PlaceCard'
import { SearchArea } from '../../components/SearchArea'
import { usePlaces } from '../../contexts/PlacesContext'

import {
	Container,
	PlaceCardsContainer,
} from './styles'

export function Home() {
	const { places, deletePlace } = usePlaces()

	const handleDeletePlace = useCallback(async (id: string) => {
		try {
			await deletePlace(id)
		} catch {

		}
	}, [deletePlace])

	return (
		<>
			<Header />

			<Container>
				<SearchArea />

				<PlaceCardsContainer>
					{places.map(place => {
						return (
							<PlaceCard
								key={place.id}
								place={place}
								onDelete={() => handleDeletePlace(place.id)}
							/>
						)
					})}
				</PlaceCardsContainer>
			</Container>
		</>
	)
}