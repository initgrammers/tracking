import moment from 'moment';

export const formatGeneralDate = (_date) =>
  moment(_date).format('DD/MM/YYYY HH:mm');

export const formatTime = (sec, min, hours) =>
  `${fixWithZero(hours)}:${fixWithZero(min)}:${fixWithZero(sec)}`;

export const fixWithZero = (number) =>
  Number(number).toString().length > 1 ? number : '0' + number;
