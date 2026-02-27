const nf = new Intl.NumberFormat('ko-KR');

export function formatNumber(value: number): string {
	return nf.format(value);
}
