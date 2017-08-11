'use strict';

// Should return an object with 2 keys, "unix" and "natural"
// Should return a unix key with a unix timestamp value
// Should return a natural key with a natural date without URL encoding
exports.convertNaturalToUnix = function(naturalDate) {
  let timestampObject = {
    unix: "",
    natural: ""
  };
  let dateWithoutURLEncoding = naturalDate.replace(/%20/g, " ");
  // Removes forward slash from the beginning of the string
  timestampObject.natural = dateWithoutURLEncoding.slice(1);
  timestampObject.unix = Date.parse(dateWithoutURLEncoding)/1000;
  return timestampObject;
};

// Should return an object with 2 keys, "unix" and "natural"
// Should return a unix key with a unix timestamp value without a forward slash
// Should return a natural key with a natural date without URL encoding
exports.convertUnixToNatural = function(unixTimestamp) {
  let timestampObject = {
    unix: "",
    natural: ""
  };
  // Removes forward slash from the beginning of the string
  timestampObject.unix = unixTimestamp.slice(1);
  let dateFromUnixTimestamp = new Date(timestampObject.unix * 1000);
  let month = dateFromUnixTimestamp.toDateString().slice(4, 7);
  let dateString = dateFromUnixTimestamp.toDateString().slice(4);
  
  switch (month) {
    case "Jan":
      timestampObject.natural = dateString.replace(/(Jan)/, "January");
      break;
    case "Feb":
      timestampObject.natural = dateString.replace(/(Feb)/, "February");
      break;
    case "Mar":
      timestampObject.natural = dateString.replace(/(Mar)/, "March");
      break;
    case "Apr":
      timestampObject.natural = dateString.replace(/(Apr)/, "April");
      break;
    case "May":
      timestampObject.natural = dateString.replace(/(May)/, "May");
      break;
    case "Jun":
      timestampObject.natural = dateString.replace(/(Jun)/, "June");
      break;
    case "Jul":
      timestampObject.natural = dateString.replace(/(Jul)/, "July");
      break;
    case "Aug":
      timestampObject.natural = dateString.replace(/(Aug)/, "August");
      break;
    case "Sep":
      timestampObject.natural = dateString.replace(/(Sep)/, "September");
      break;
    case "Oct":
      timestampObject.natural = dateString.replace(/(Oct)/, "October");
      break;
    case "Nov":
      timestampObject.natural = dateString.replace(/(Nov)/, "November");
      break;
    case "Dec":
      timestampObject.natural = dateString.replace(/(Dec)/, "December");
      break;
  };
  
  return timestampObject;
};