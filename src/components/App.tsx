import React, { useState } from 'react'
import Image from 'next/image'
import { getConvertion } from '@/services/getConvertion'
import { handleSelectChange } from '@/logic/handleSelectChange'
import { handleInputChange } from '@/logic/handleInputChange'
import Select from './Select'
import Header from './Header'
import Result from './Result'
import { useCurrencies } from '@/hooks/useCurrencies'

export default function App() {
	const [convertedAmount, setConvertedAmount] = useState<number>()
	const [toValue, setToValue] = useState<string>('')
	const [fromValue, setFromValue] = useState<string>('')
	const [amountValue, setAmountValue] = useState<number | null>(1)
	const [inputError, setInputError] = useState<string>()
	const { currencies, error, isLoading } = useCurrencies()
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
			.catch((err) => {
				if (err instanceof Error) return alert(err.message)
			})
			.finally(() => setLoadingResult(false))
	}

	return (
		<main className='flex flex-col items-center justify-center h-screen backdrop-blur'>
			<article className='bg-cyan-600 bg-opacity-75 p-10 rounded-2xl shadow-2xl shadow-emerald-950'>
				<Header />
				<form
					className='flex flex-col items-start py-4'
					onSubmit={handleSubmit}
				>
					<label className='text-gray-300 text-xl py-2'>
						Please enter the amount:
					</label>
					<input
						className='p-3 mb-4 w-[230px] bg-slate-600 rounded-lg text-gray-200 focus:outline-1 focus:outline-sky-400 focus:border-none shadow-lg shadow-slate-900 hover:scale-105 ease-in-out duration-200'
						name='amountInput'
						placeholder='10.0'
						value={amountValue ?? 0}
						onChange={(e) => {
							const { numberInput, inputError } = handleInputChange(e)
							setInputError(inputError)
							setAmountValue(numberInput)
						}}
					/>
					{inputError && <span className='text-red-600'>{inputError}</span>}
					<article className='flex flex-col'>
						<label className='text-gray-300 text-xl py-2'>From:</label>
						<Select
							value={fromValue}
							handleSelectChange={(e) => {
								const { newValue } = handleSelectChange(e)
								setFromValue(newValue)
							}}
							options={currencies!}
							isLoading={isLoading}
							error={error!}
						/>
						<label className='text-gray-300 text-xl py-2'>To:</label>
						<Select
							value={toValue}
							handleSelectChange={(e) => {
								const { newValue } = handleSelectChange(e)
								setToValue(newValue)
							}}
							options={currencies!}
							error={error!}
							isLoading={isLoading}
						/>
						<button
							type='submit'
							disabled={loadingResult}
							className='px-3 py-2 bg-slate-600 text-gray-300 text-lg rounded-lg mt-6 shadow-lg shadow-slate-900 self-center hover:bg-slate-700 hover:scale-105 disabled:opacity-75 disabled:hover:scale-100 disabled:hover:bg-slate-600'
						>
							{loadingResult ? (
								<Image
									src={'/gki20kcf82fa7kdlalt4blhe5l.png'}
									width={30}
									height={30}
									alt='spinner'
									className='animate-spin cursor-wait'
								/>
							) : (
								'Convert'
							)}
						</button>
					</article>
				</form>
				<Result amount={convertedAmount} />
			</article>
		</main>
	)
}
