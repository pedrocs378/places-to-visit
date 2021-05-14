import { useCallback, useState } from 'react'

import { Header } from '../../components/Header'
import { PlaceCard } from '../../components/PlaceCard'
import { SearchArea } from '../../components/SearchArea'
import { UpdatePlaceModal } from '../../components/UpdatePlaceModal'

import { Place, usePlaces } from '../../contexts/PlacesContext'

import {
	Container,
	PlaceCardsContainer,
} from './styles'

interface IsUpdatePlaceModalOpenProps {
	opened: boolean
	data: Place
}

export function Home() {
	const [isUpdatePlaceModalOpen, setIsUpdatePlaceModalOpen] = useState<IsUpdatePlaceModalOpenProps>({
		opened: false,
		data: {} as Place
	})

	const { places, deletePlace } = usePlaces()

	function handleCloseModal() {
		setIsUpdatePlaceModalOpen({
			opened: false,
			data: {} as Place
		})
	}

	const handleDeletePlace = useCallback(async (id: string) => {
		try {
			await deletePlace(id)
		} catch {
		}
	}, [deletePlace])

	const handleEditPlace = useCallback((data: Place) => {
		setIsUpdatePlaceModalOpen({
			opened: true,
			data
		})
	}, [])

	return (
		<>
			<UpdatePlaceModal
				isOpen={isUpdatePlaceModalOpen.opened}
				data={isUpdatePlaceModalOpen.data}
				onRequestClose={handleCloseModal}
			/>

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
								onUpdate={() => handleEditPlace(place)}
							/>
						)
					})}
				</PlaceCardsContainer>
			</Container>
		</>
	)
}