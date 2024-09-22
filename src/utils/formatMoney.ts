/**
 * Format money with £ symbol
 *
 * @param amount number of pounds sterling in decimal format. e.g. 12.34
 */
export const formatMoney = (amount: number)  => `£${amount.toFixed(2)}`;