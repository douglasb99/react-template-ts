/**
 * Format date as "MMM YYYY"
 *
 * @param dateString
 */
export const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
};
