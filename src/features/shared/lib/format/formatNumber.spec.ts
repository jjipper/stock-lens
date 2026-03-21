import { formatNumber } from './formatNumber';

describe('formatNumber', () => {
	it('숫자를 한국어 포맷으로 변환해야 한다', () => {
		expect(formatNumber(1234567)).toBe('1,234,567');
	});

	it('0을 올바르게 포맷해야 한다', () => {
		expect(formatNumber(0)).toBe('0');
	});
});
