export const func = {
  unixTimestampToDate: unixTimestamp => {
    if (unixTimestamp === undefined) return "";

    let date = new Date(unixTimestamp * 1000);
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    return `${year}/${month}/${day}`;
  },
  dateToUnixTimestamp: date => {
    return parseInt((date.getTime() / 1000).toFixed(0));
  },
  getDateWithoutTime(dateTime) {
    var date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
  }
};
