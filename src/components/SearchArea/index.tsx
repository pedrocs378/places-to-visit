import { FormEvent, useMemo, useState } from 'react'
import InputMask from 'react-input-mask'

import { useCountries } from '../../contexts/CountriesContext'
import { usePlaces } from '../../contexts/PlacesContext'

import { Button } from '../Button'

import { Container, Content, CountriesSelect } from './styles'

interface CountrySelectProps {
	value: string
	label: string
}

export function SearchArea() {
	const countries = useCountries()
	const { createPlace } = usePlaces()

	const [countrySelected, setCountrySelected] = useState<CountrySelectProps | null>(null)
	const [place, setPlace] = useState('')
	const [goal, setGoal] = useState('')

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		if (!countrySelected || !place.trim() || !goal.trim()) {
			return
		}

		try {
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
		} catch {

		}
	}

	const countriesOptions: CountrySelectProps[] = useMemo(() => {
		return countries.map(country => {
			return {
				value: country.name,
				label: country.translations.br
			}
		})
	}, [countries])

	return (
		<Container>
			<Content>
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
					<input
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
					<InputMask
						name="goal"
						mask="99/9999"
						placeholder="mês/ano"
						value={goal}
						onChange={(event) => setGoal(event.target.value)}
					/>
				</div>

				<Button type="submit" onClick={handleSubmit}>
					Adicionar
				</Button>
			</Content>
		</Container>
	)
}