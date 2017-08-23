const goods = require('./goods.js');
const smell = require ('./smell.js');
const meat = require ('./meat.js');
const sec = require ('./sec.js');

module.exports = function() {
  return {
    "goods": goods,
    'sec':sec,
    'smell':smell,
    'meat':meat
  }
}
