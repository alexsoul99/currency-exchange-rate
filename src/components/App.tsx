import React, { useState } from 'react'
import Image from 'next/image'
import Select from './Select'
import Header from './Header'
import Result from './Result'
import { useCurrencies } from '@/hooks/useCurrencies'
import { useHandleSubmit } from '@/hooks/useHandleSubmit'
import { useHandleInputChange } from '@/hooks/useHandleInputChange'

export default function App() {
	const { amountValue, inputError, handleInputChange } = useHandleInputChange()
	const { currencies, error, isLoading } = useCurrencies()
	const [fromValue, setFromValue] = useState<string>('USD')
	const [toValue, setToValue] = useState<string>('EUR')
	const { convertedAmount, loadingResult, handleSubmit } = useHandleSubmit(
		amountValue!,
		toValue,
		fromValue
	)

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
						type='number'
						placeholder='10.0'
						value={amountValue!}
						onChange={(e) => {
							handleInputChange(e)
						}}
					/>
					{inputError && <span className='text-red-600'>{inputError}</span>}
					<article className='flex flex-col'>
						<label className='text-gray-300 text-xl py-2'>From:</label>
						<Select
							value={fromValue}
							handleSelectChange={(e) => {
								const newValue = e.target.value
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
								const newValue = e.target.value
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
