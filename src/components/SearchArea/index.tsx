
import { Button } from '../Button'

import { Container, Content } from './styles'

export function SearchArea() {

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
						type="text"
						placeholder="Digite o local que deseja conhecer"
					/>
				</div>
				<div>
					<label htmlFor="goal">Meta</label>
					<input
						id="goal"
						type="text"
						placeholder="mês/ano"
					/>
				</div>

				<Button type="submit">
					Adicionar
				</Button>
			</Content>
		</Container>
	)
}