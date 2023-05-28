export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-US', { formatMatcher: 'basic' }).format(new Date(dateString))
}