import { groupBy } from 'lodash';

const orderCards = (cards, ids) => {
  const obj = groupBy(cards, 'id');
  const orderedCards = [];
  ids.map(id => orderedCards.push(obj[id][0]));
  return orderedCards;
};

export default orderCards;
