import { getConvertion } from '@/services/getConvertion'
import { useState } from 'react'

export function useHandleSubmit(
	amountValue: number,
	toValue: string,
	fromValue: string
) {
	const [convertedAmount, setConvertedAmount] = useState<number>()
	const [loadingResult, setLoadingResult] = useState<boolean>()

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setLoadingResult(true)

		getConvertion(toValue, fromValue, amountValue)
			.then(({ data }): void => {
				console.log(toValue, fromValue, amountValue)
				const result: number = data.result
				setConvertedAmount(result)
			})
			.catch((err: unknown) => {
				if (err instanceof Error) return alert(err.message)
			})
			.finally(() => setLoadingResult(false))
	}

	return {
		convertedAmount,
		loadingResult,
		handleSubmit,
	}
}
