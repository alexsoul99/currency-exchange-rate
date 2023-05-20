import Image from 'next/image'

export default function Header() {
	return (
		<header className='flex justify-between w-[15rem]'>
			<h1 className='text-gray-300 text-3xl font-extrabold w-[40%]'>
				Currency Exchanger
			</h1>
			<Image
				src='/logo.png'
				alt='Exchange Currency Logo'
				width={70}
				height={70}
			/>
		</header>
	)
}
