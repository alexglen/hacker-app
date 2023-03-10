export const getDate = (timestamp: number): string => {
    const fullDate = new Date(timestamp);
    const day = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();

    const formattedFay = day > 9 ? day : `0${day}`;
    const formattedMonth = month > 9 ? month : `0${month}`;

    return `${formattedFay}.${formattedMonth}.${year}`;
}