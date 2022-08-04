import { subDays, format } from 'date-fns';

const date = new Date(1990, 2, 27);
const res = subDays(date, 30);
const str = format(res, 'dd/MM/yyyy');

console.log({Response: str});
