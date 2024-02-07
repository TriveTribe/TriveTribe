
/**
 * Converts date time to string format dd-mm-yy hh:mm
 * @param date Date to convert
 */
export function getDateTime(startDate: Date, endDate: Date): string {
  const day = startDate.getDate();
  const month = startDate.getMonth() + 1;
  const year = startDate.getFullYear();
  const hours = startDate.getHours();
  const minutes = startDate.getMinutes();

  const endHours = endDate.getHours();
  const endMinutes = endDate.getMinutes();

  return `${day}/${month}/${year} ${hours}:${minutes}-${endHours}:${endMinutes}`;
}