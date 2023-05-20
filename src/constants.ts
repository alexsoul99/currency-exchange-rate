export const API_URL = 'https://api.apilayer.com/exchangerates_data/'

const MY_HEADERS = new Headers()
if (process.env.NEXT_PUBLIC_API_KEY) {
	MY_HEADERS.append('apikey', process.env.NEXT_PUBLIC_API_KEY)
}

export const REQUEST_OPTIONS: RequestInit = {
	method: 'GET',
	redirect: 'follow',
	headers: MY_HEADERS,
}
