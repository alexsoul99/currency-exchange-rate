import { getCurrencies } from '@/services/getCurrencies'
import { Currency } from '@/types'
import { useEffect, useState } from 'react'

export function useCurrencies() {
	const [currencies, setCurrencies] = useState<Array<Currency>>()
	const [error, setError] = useState<string>()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)
		getCurrencies()
			.then((res) => setCurrencies(res))
			.catch((err) =>
				setError(`Ha ocurrido un error al realizar el request: ${err}`)
			)
			.finally(() => setIsLoading(false))
	}, [])

	return { currencies, error, isLoading }
}
