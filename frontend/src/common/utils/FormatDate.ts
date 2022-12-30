export const formatDate = {
  /**
   * Format a given timestamp (string)
   * @param {string} 2022-08-05 17:14:35.553-03
   *
   * into a Locale date, that will be show according with the user brower language (ex: en-US, pt-BT)
   * @returns {string} 05/08/22 17:14:35
   */

  toLocaleDate(date: Date) {
    if (!date) {
      return
    }
    return new Date(date).toLocaleString(undefined, {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }
  
}
