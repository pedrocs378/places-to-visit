import { createContext, ReactNode, useContext, useState } from "react";

import { Country } from './CountriesContext'

export interface Place {
	id: string
	country: Country
	name: string
	goal: string
}

interface PlacesContextData {
	places: Place[]
	createPlace: (data: Place) => Promise<void>
	deletePlace: (id: string) => Promise<void>
}

interface PlacesProviderProps {
	children: ReactNode
}

const PlacesContext = createContext({} as PlacesContextData)

export function PlacesProvider({ children }: PlacesProviderProps) {
	const [places, setPlaces] = useState<Place[]>([])

	async function createPlace(data: Place) {
		setPlaces([...places, data])
	}

	async function deletePlace(id: string) {
		const placesUpdated = places.filter(place => place.id !== id)

		setPlaces(placesUpdated)
	}

	return (
		<PlacesContext.Provider value={{ places, createPlace, deletePlace }}>
			{children}
		</PlacesContext.Provider>
	)
}

export const usePlaces = () => useContext(PlacesContext)