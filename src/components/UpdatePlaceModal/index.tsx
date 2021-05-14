import { FormEvent } from 'react'
import Modal from 'react-modal'
import { MdClose } from 'react-icons/md'

import { Button } from '../Button'

import { Place } from '../../contexts/PlacesContext'

import { Container } from './styles'

interface UpdatePlaceModalProps {
	isOpen: boolean
	data: Place
	onRequestClose: () => void
}

export function UpdatePlaceModal({ isOpen, data, onRequestClose }: UpdatePlaceModalProps) {

	function handleSave(event: FormEvent) {
		event.preventDefault()

		onRequestClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button type="button" className="react-modal-close" onClick={onRequestClose}>
				<MdClose />
			</button>

			<Container>
				<div>
					<img src={data.country?.flag} alt={data.country?.name} />

					<h3>{data.country?.translations.br}</h3>
				</div>

				<Button
					type="submit"
					onSubmit={handleSave}
				>
					Salvar
				</Button>
			</Container>
		</Modal>
	)
}