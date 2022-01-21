import dayjs from 'dayjs'

export class DateFormatter {
    static formatDate(date: Date): string {
        return dayjs(date).format('DD/MM/YYYY')
    }
}