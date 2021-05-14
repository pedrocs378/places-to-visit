import { MdEdit, MdClose } from 'react-icons/md'

import { Container, ButtonsController } from './styles'

export function PlaceCard() {

	return (
		<Container>
			<header>
				<div>
					<img src="https://restcountries.eu/data/bra.svg" alt="Brasil" />

					<ButtonsController>
						<button type="button">
							<MdEdit />
						</button>

						<button type="button">
							<MdClose />
						</button>
					</ButtonsController>
				</div>

				<h3>Brasil</h3>
			</header>

			<div>
				<p>Local: Balneario Camboriu</p>
				<p>Meta: 04/2022</p>
			</div>
		</Container>
	)
}