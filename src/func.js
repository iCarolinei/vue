export const func = {
    unixTimestampToDate: (unixTimestamp) => {
        if (unixTimestamp === undefined) return '';

        let date = new Date(unixTimestamp * 1000);
        let year = date.getFullYear();
        let month = ("0" + date.getMonth()).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return `${year}/${month}/${day}`
    }
}
