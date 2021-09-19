export default function (obj, cards, desc = false) {
  obj.cards.sort((a, b) => {
    return desc
      ? cards[b].creationTime - cards[a].creationTime
      : cards[a].creationTime - cards[b].creationTime;
  });
  return obj;
}
