/// Converts a parable date string to a "month, year" string
export const formatDateToString = (dateString) => 
{
    if (dateString) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var date = new Date(dateString);
        return `${monthNames[date.getUTCMonth()]}, ${date.getUTCFullYear()}`;
    }
    return ""; //Unknown or not set date
}