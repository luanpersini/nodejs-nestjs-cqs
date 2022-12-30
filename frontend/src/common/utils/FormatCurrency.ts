export const formatCurrency = {
  /**
   * Format a given amount (string | number)
   * @param {string | number} 1999.00
   *
   * into a Locale Currency format (ex: en-us, USD)
   * @returns {string} $1,999.00
   */

  toLocaleCurrency(amount: string | number, locale: string, currency: string) {       
    return new Intl.NumberFormat(locale, { currency, style: 'currency' }).format(Number(amount))
  }
  
}
