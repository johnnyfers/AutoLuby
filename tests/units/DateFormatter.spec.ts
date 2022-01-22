import { DateFormatter } from "../../src/domain/services/DateFormatter"

test('should be able to format a Date Object to (DD/MM/YYYY) format', () => {
    const dateToBeFormatted = new Date('2022-01-22T14:24:31')
    expect(DateFormatter.formatDate(dateToBeFormatted)).toBe('22/01/2022')
})