import { FormEvent, useMemo } from 'react'
import InputMask from 'react-input-mask'

import { useCountries } from '../../contexts/CountriesContext'

import { Button } from '../Button'

import { Container, Content, CountriesSelect } from './styles'

export function SearchArea() {
	const countries = useCountries()

	const countriesOptions = useMemo(() => {
		return countries.map(country => {
			return {
				value: country.name,
				label: country.translations.br
			}
		})
	}, [countries])

	function handleSubmit(event: FormEvent) {
		event.preventDefault()

	}

	return (
		<Container>
			<Content>
				<div className="country">
					<label htmlFor="country">País</label>
					<CountriesSelect
						classNamePrefix="react-select"
						isSearchable={false}
						isClearable={true}
						placeholder="Selecione"
						options={countriesOptions}
					/>
				</div>
				<div className="place">
					<label htmlFor="place">Local</label>
					<input
						id="place"
						name="place"
						type="text"
						placeholder="Digite o local que deseja conhecer"
					/>
				</div>
				<div className="goal">
					<label htmlFor="goal">Meta</label>
					<InputMask
						mask="99/9999"
						id="goal"
						name="goal"
						type="text"
						placeholder="mês/ano"
					/>
				</div>

				<Button type="submit" onClick={handleSubmit}>
					Adicionar
				</Button>
			</Content>
		</Container>
	)
}