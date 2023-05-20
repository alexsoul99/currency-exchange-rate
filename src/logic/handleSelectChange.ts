export function handleSelectChange(
	event: React.ChangeEvent<HTMLSelectElement>
): { newValue: string } {
	const newValue = event.target.value
	return { newValue }
}
