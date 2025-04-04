export function timeStampToDateAndTime(timeStamp) {
  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day}/${month}/${year}   ${hours}:${minutes}`;
}
