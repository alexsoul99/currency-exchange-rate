import { useState } from 'react'

export function useHandleInputChange() {
	const [amountValue, setAmountValue] = useState<number | null>()
	const [inputError, setInputError] = useState<string>()

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const numberInput = +event.target.value
		if (isNaN(numberInput) || numberInput <= 0) {
			setAmountValue(null)
			setInputError('Incorrect Input')
		} else {
			setInputError('')
			setAmountValue(numberInput)
		}
		return { numberInput: numberInput, inputError: '' }
	}
	return { amountValue, inputError, handleInputChange }
}
