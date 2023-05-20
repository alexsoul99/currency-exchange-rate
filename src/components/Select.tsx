import { SelectProps } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function Select({
	value,
	options,
	handleSelectChange,
	isLoading,
	error,
}: SelectProps): JSX.Element {
	return (
		<>
			{options && (
				<select
					className='bg-slate-600 rounded-lg p-3 w-[230px] text-gray-300 text-lg shadow-lg shadow-slate-900 hover:scale-105 duration-200 ease-in-out'
					value={value}
					onChange={handleSelectChange}
				>
					{options?.map(({ key, value }) => {
						return (
							<option
								key={key}
								value={key}
							>
								{value}
							</option>
						)
					})}
				</select>
			)}
			{isLoading && (
				<span className='text-gray-300 font-bold text-xl flex justify-center items-center cursor-wait'>
					Loading Currencies....
					<Image
						src={'/gki20kcf82fa7kdlalt4blhe5l.png'}
						width={30}
						height={30}
						alt='spinner'
						className='animate-spin'
					/>
				</span>
			)}
			{error && (
				<span className='text-gray-500 font-bold text-xl flex justify-center items-center'>
					{error}
				</span>
			)}
		</>
	)
}
