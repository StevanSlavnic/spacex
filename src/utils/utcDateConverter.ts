export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const DD = String(date.getDate()).padStart(2, '0');
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const YYYY = date.getFullYear();

    return `${DD}-${MM}-${YYYY}`;
}
