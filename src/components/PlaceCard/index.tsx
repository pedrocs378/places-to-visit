import { MdEdit, MdClose } from 'react-icons/md'

import { Place } from '../../contexts/PlacesContext'

import { Container, ButtonsController } from './styles'

interface PlaceCardProps {
	place: Place
	onDelete?: () => void
}

export function PlaceCard({ place, onDelete }: PlaceCardProps) {

	return (
		<Container>
			<header>
				<div>
					<img src={place.country.flag} alt={place.country.name} />

					<ButtonsController>
						<button type="button">
							<MdEdit />
						</button>

						<button type="button" onClick={() => onDelete && onDelete()}>
							<MdClose />
						</button>
					</ButtonsController>
				</div>

				<h3>{place.country.translations.br}</h3>
			</header>

			<div>
				<p>Local: {place.name}</p>
				<p>Meta: {place.goal}</p>
			</div>
		</Container>
	)
}