import { MutableRefObject, Ref } from 'react'

export type Currency = {
	key: string
	value: string
}

export type FormProps = {
	amountValue: number
	currencies: Array<Currency> | undefined
	fromValue: string
	toValue: string
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleFromSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
	handleToSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
	handleSubmit: (event: SubmitEvent) => void
}

export type SelectProps = {
	value: string | undefined
	options: Array<Currency>
	isLoading: boolean
	error: string
	handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface ConvertResponse {
	date: Date
	info: Info
	query: Query
	result: number
	success: boolean
}

export interface Info {
	rate: number
	timestamp: number
}

export interface Query {
	amount: number
	from: string
	to: string
}
