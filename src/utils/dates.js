import moment from 'moment';

export const formatGeneralDate = (_date) =>
  moment(_date).format('DD/MM/YYYY HH:mm');
