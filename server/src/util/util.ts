function cardToNumber (card: string): number {
	if (!card) {
		return 0
	}

	if (typeof card === 'number') {
		return card
	}

	const intPart = Number.parseInt(card, 10)

	if (!intPart) { // Apenas letra
		return (card.charCodeAt(0) - 64) * 1000
	}

	const charPart = card[card.length - 1]

	if (/^\d$/.test(charPart)) { // Se o ultimo caracterer for um número
		return intPart
	}

	return ((charPart.charCodeAt(0) - 64) * 1000 + intPart)
}

export { cardToNumber }