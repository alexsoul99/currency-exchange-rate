import React from 'react'

type ResultProps = {
	amount: number | undefined
}

export default function Result({ amount }: ResultProps) {
	return (
		<section
			className='bg-slate-600 text-gray-300 rounded-xl shadow-lg shadow-slate-900 flex
				justify-center items-center text-2xl p-2 w-[250px] h-12 mt-4'
		>
			{amount ? (
				<span>{amount?.toFixed(2)}</span>
			) : (
				<span className='text-gray-400 text-opacity-50 cursor-default'>
					Result...
				</span>
			)}
		</section>
	)
}
