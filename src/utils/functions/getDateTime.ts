
/**
 * Converts date time to string format dd-mm-yy hh:mm
 * @param date Date to convert
 */
export function getDateTime(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}