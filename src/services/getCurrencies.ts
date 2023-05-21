import { API_URL, REQUEST_OPTIONS } from '../constants'
import { Currency } from '../types'

export async function getCurrencies() {
	try {
		const res = await fetch(`${API_URL}symbols`, REQUEST_OPTIONS)

		const data = await res.json()

		const transformObject = Object.entries<[string, string]>(data.symbols).map(
			(symbol) => {
				const currentSymbol: Currency = {
					key: symbol[0],
					value: symbol[1].toString(),
				}
				return currentSymbol
			}
		)
		return transformObject
	} catch (err) {
		if (err instanceof Error)
			throw new Error(
				`Something went wrong with the response. Error: ${err.message}`
			)
	}
}
