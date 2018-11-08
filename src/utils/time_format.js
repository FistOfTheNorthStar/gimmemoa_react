import moment from 'moment';

export const dateFormat = function(time) {
  return(time ? moment(time).format('MMMM DD YYYY, h:mm:ss a') : '');
};
