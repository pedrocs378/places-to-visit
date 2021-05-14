import { FormEvent } from 'react'

import { Button } from '../Button'

import { Container, Content } from './styles'

export function SearchArea() {

	function handleSubmit(event: FormEvent) {
		event.preventDefault()

	}

	return (
		<Container>
			<Content>
				<div>
					<label htmlFor="country">País</label>
					<input
						id="country"
						type="text"
						placeholder="Selecione"
					/>
				</div>
				<div>
					<label htmlFor="place">Local</label>
					<input
						id="place"
						name="place"
						type="text"
						placeholder="Digite o local que deseja conhecer"
					/>
				</div>
				<div>
					<label htmlFor="goal">Meta</label>
					<input
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