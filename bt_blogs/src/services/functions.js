import * as values from './../constants/ConstValues';

export function getCreatedTime(date1, date2) {
  let diff = (date2.getTime() - date1.getTime()) / 1000;
  let flag = false;
  let str = '';
  const timesObj = {
                      'years': Math.abs(Math.round((diff/(60 * 60 * 24)) / 365.25)),
                      'months': Math.abs(Math.round(diff/(60 * 60 * 24 * 7 * 4))),
                      'days': Math.abs(Math.round(diff/(3600 * 24))),
                      'hours': Math.abs(Math.round(diff/(3600))),
                      'mins': Math.abs(Math.round(diff/(60))),
                      'sec': Math.abs(Math.round(diff))
                   };

  Object.entries(timesObj).map(([key, value],index) => {
    if(value > 0 && !flag) {
      str = value + ' ' + key + ' ago';
      flag = true;
    }
  });

  return str;
}

export function getCreatedDate(time) {
  const createdDate = new Date(time);
  const month = values.MONTHS[createdDate.getUTCMonth()];
  const strDate = month + ' ' + createdDate.getUTCDate() + ', ' + createdDate.getUTCFullYear();

  return strDate;
}
