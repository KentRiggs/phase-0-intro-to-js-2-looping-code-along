const cards = ["Charlie", "Samip", "Ali"];

function writeCards(cards, eventName) {
  const thankYouMessages = [];

  for (let i = 0; i < cards.length; i++) {
    thankYouMessages.push(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`);
  }

  console.log(thankYouMessages); 
  return thankYouMessages;
}

writeCards(cards, "birthday");

function countDown(startingNumber) {
    
for (let i = startingNumber; i >= 0; i--) {
  console.log(i);
}
}