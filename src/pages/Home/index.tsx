import { FormEvent, useCallback, useMemo, useState } from 'react'
import ReactInputMask from 'react-input-mask'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { PlaceCard } from '../../components/PlaceCard'
import { UpdatePlaceModal } from '../../components/UpdatePlaceModal'

import { useCountries } from '../../contexts/CountriesContext'
import { Place, usePlaces } from '../../contexts/PlacesContext'

import {
	Container,
	PlaceCardsContainer,
	SearchArea,
	SearchAreaContent,
	CountriesSelect
} from './styles'

interface CountrySelectProps {
	value: string
	label: string
}

interface IsUpdatePlaceModalOpenProps {
	opened: boolean
	data: Place
}

export function Home() {
	const countries = useCountries()
	const { places, deletePlace, createPlace } = usePlaces()

	const [countrySelected, setCountrySelected] = useState<CountrySelectProps | null>(null)
	const [place, setPlace] = useState('')
	const [goal, setGoal] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [isUpdatePlaceModalOpen, setIsUpdatePlaceModalOpen] = useState<IsUpdatePlaceModalOpenProps>({
		opened: false,
		data: {} as Place
	})

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		if (!countrySelected || !place.trim() || !goal.trim()) {
			return
		}

		try {
			setIsLoading(true)

			const country = countries.find(country => country.name === countrySelected.value)

			if (!country) {
				return
			}

			await createPlace({
				name: place,
				goal,
				country
			})

			setPlace('')
			setGoal('')
			setCountrySelected(null)
		} finally {
			setIsLoading(false)
		}
	}

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

	const countriesOptions: CountrySelectProps[] = useMemo(() => {
		return countries.map(country => {
			return {
				value: country.name,
				label: country.translations.br
			}
		})
	}, [countries])

	return (
		<>
			<UpdatePlaceModal
				isOpen={isUpdatePlaceModalOpen.opened}
				data={isUpdatePlaceModalOpen.data}
				onRequestClose={handleCloseModal}
			/>

			<Header />

			<Container>
				<SearchArea>
					<SearchAreaContent>
						<div className="country">
							<label htmlFor="country">País</label>
							<CountriesSelect
								classNamePrefix="react-select"
								isSearchable={false}
								isClearable={true}
								isLoading={countries.length === 0}
								placeholder="Selecione"
								options={countriesOptions}
								value={countrySelected}
								onChange={(data: CountrySelectProps | null) => setCountrySelected(data)}
							/>
						</div>
						<div className="place">
							<label htmlFor="place">Local</label>
							<Input
								hasMask={false}
								id="place"
								name="place"
								type="text"
								placeholder="Digite o local que deseja conhecer"
								value={place}
								onChange={(event) => setPlace(event.target.value)}
							/>
						</div>
						<div className="goal">
							<label htmlFor="goal">Meta</label>
							<Input
								hasMask
								id="goal"
								name="goal"
								placeholder="mês/ano"
								value={goal}
								onChange={(event) => setGoal(event.target.value)}
							/>
						</div>

						<Button type="submit" isLoading={isLoading} onClick={handleSubmit}>
							Adicionar
						</Button>
					</SearchAreaContent>
				</SearchArea>

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