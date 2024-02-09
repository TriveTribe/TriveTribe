/**
 * Combines date and time strings into a single date-time string
 * @param dateString date string
 * @param timeString time string
 * @returns datetime string
 */
export function getDateTimeString(dateString: string, timeString: string) {
  const date = new Date(dateString);
  const time = new Date(timeString);
  date.setHours(time.getHours());
  date.setMinutes(time.getMinutes());
  return date.toISOString();
}
