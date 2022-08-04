// var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'toby mcguire',
    role: 'admin',
  },
  {
    username: 'ricky',
    role: 'customer',
  },
  {
    username: 'angela',
    role: 'seller',
  },
  {
    username: 'michael scott',
    role: 'seller',
  },
];

const resp = _.groupBy(data, (item) => item.role);
console.log(resp);

