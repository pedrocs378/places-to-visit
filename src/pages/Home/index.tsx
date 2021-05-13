
import { Header } from '../../components/Header'
import { SearchArea } from '../../components/SearchArea'

import {
	Container,
} from './styles'

export function Home() {

	return (
		<>
			<Header />

			<Container>
				<SearchArea />
			</Container>
		</>
	)
}