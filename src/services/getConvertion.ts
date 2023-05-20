import { API_URL, REQUEST_OPTIONS } from '@/constants'
import { ConvertResponse } from '@/types'

export async function getConvertion(
	toValue: string | undefined,
	fromValue: string | undefined,
	amountValue: number | null
) {
	const res = await fetch(
		`${API_URL}convert?to=${toValue}&from=${fromValue}&amount=${amountValue}`,
		REQUEST_OPTIONS
	)
	if (!res.ok) alert('Error al alcanzar datos')
	const data: ConvertResponse = await res.json()
	return { data }
}
