import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

import { Country } from './CountriesContext'

export interface Place {
	id: string
	country: Country
	name: string
	goal: string
}

interface PlacesContextData {
	places: Place[]
	createPlace: (data: Omit<Place, 'id'>) => Promise<void>
	deletePlace: (id: string) => Promise<void>
}

interface PlacesProviderProps {
	children: ReactNode
}

const PlacesContext = createContext({} as PlacesContextData)

export function PlacesProvider({ children }: PlacesProviderProps) {
	const [places, setPlaces] = useState<Place[]>([])

	async function createPlace(data: Omit<Place, 'id'>) {
		const response = await api.post<Place>('/places', { ...data })

		setPlaces([...places, response.data])
	}

	async function deletePlace(id: string) {
		await api.delete(`/places/${id}`)

		const placesUpdated = places.filter(place => place.id !== id)

		setPlaces(placesUpdated)
	}

	useEffect(() => {
		api.get('/places').then(response => {
			setPlaces(response.data)
		})
	}, [])

	return (
		<PlacesContext.Provider value={{ places, createPlace, deletePlace }}>
			{children}
		</PlacesContext.Provider>
	)
}

export const usePlaces = () => useContext(PlacesContext)