import { padLeft, formatLocalDatetime } from '..';

describe('utility methods', () => {
    it('padLeft(number)', () => {
        const result = padLeft(1);
        expect(result).toBe('01');
    });

    it('padLeft(number, "0", 3)', () => {
        const result = padLeft(2, '0', 3);
        expect(result).toBe('002');
    });

    it('padLeft(string)', () => {
        const result = padLeft('A');
        expect(result).toBe('0A');
    });

    it('padLeft(string, " ", 4)', () => {
        const result = padLeft('B', ' ', 4);
        expect(result).toBe('   B');
    });

    it('formatLocalDatetime', () => {
        // yyyy-mm-ddTHH:mm
        const result = formatLocalDatetime(new Date());
        expect(result.length).toBe(16);
    });
});
