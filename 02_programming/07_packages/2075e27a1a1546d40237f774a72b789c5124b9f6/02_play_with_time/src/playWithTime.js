import moment from "moment";


// console.log(formatDate("2000-05-31")); // Wednesday 31st May 2000
// console.log(yearsSinceDate("2000-05-31")); // 20
// console.log(getDayFromDate("2000-05-31")); // 7394
// console.log(daysSinceDate("2000-05-31")); // Wednesday

const formatDate = (date) => moment(date,"YYYY-MM-DD").format("dddd Do MMMM YYYY");
const yearsSinceDate = (date) => {
  const years = moment(date,"YYYY-MM-DD").fromNow(true);
  return parseInt(years.substring(0,years.indexOf(" ")));
};
const daysSinceDate = (date) => {
  return moment().diff(date, "days");
};
const getDayFromDate = (date) => moment(date,"YYYY-MM-DD").format("dddd");

export {formatDate,yearsSinceDate,getDayFromDate,daysSinceDate};