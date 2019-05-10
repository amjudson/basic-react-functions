export function addYears(date, years) {
  if (isValidDate(date)) {
    return new Date(date.setFullYear(date.getFullYear() + years));
  }

  return null;
}

export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function addMonths(dt, n) {
  return new Date(dt.setMonth(dt.getMonth() + n));
}

// export function addMonths(dateIn, months) {
//   const monthValues = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   var isNeg = false;
//   if (months < 0) {
//     isNeg = true;
//     months = months * -1;
//   }
//   const month = dateIn.getMonth();
//   const isLeapYear = dateIn.getFullYear() % 4;
//   let days = dateIn.getDay();
//   for (let i = month; i < 12; i++) {
//     if (i === 2 && isLeapYear === 0) {
//       days = days + 1;
//     }
//     days = days + monthValues[i];
//     months--;
//     if (months > 0 && i == 11) {
//       i = 0;
//     }
//     if (months === 0) {
//       break;
//     }
//   }

//   if (isNeg) {
//     days = days * -1;
//   }

//   return addDays(dateIn, days);
// }

export function isValidDate(d) {
  let date = d;
  if (isDateString(d)) {
    date = new Date(d);
  }
  return date instanceof Date && !isNaN(date);
}

function isDateString(dateString) {
  var patern = /([0-9]{4}\-[0-9]{2}\-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z)|([0-9]{4}\-[0-9]{2}\-[0-9]{2})/;
  var result = patern.test(dateString);
  return result;
}
