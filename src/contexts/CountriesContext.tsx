import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

interface Country {
	numericCode: string
	name: string
	translations: {
		"br": string
	}
	flag: string
}

interface CountriesProviderProps {
	children: ReactNode
}

const CountriesContext = createContext<Country[]>([])

export function CountriesProvider({ children }: CountriesProviderProps) {
	const [countries, setCountries] = useState<Country[]>([])

	useEffect(() => {
		api.get('/all').then(response => {
			setCountries(response.data)
		})
	}, [])

	return (
		<CountriesContext.Provider value={countries}>
			{children}
		</CountriesContext.Provider>
	)
}

export const useCountries = () => useContext(CountriesContext)