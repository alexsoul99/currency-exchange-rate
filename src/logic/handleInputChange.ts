export function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
	const numberInput = +event.target.value
	if (isNaN(numberInput) || numberInput <= 0) {
		// setAmountValue(null)
		// setError('Incorrect input')
		return { numberInput: null, inputError: 'Incorrect Input' }
	}
	return { numberInput: numberInput, inputError: '' }
	// setError('')
	// setAmountValue(numberInput)
}
