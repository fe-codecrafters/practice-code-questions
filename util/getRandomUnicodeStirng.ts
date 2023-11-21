function getRandomUnicodeCharacters(length: number) {
  return ' '.repeat(length).split('').map((s => getRandomUnicodeCharacter())).join('')
}

function getRandomUnicodeCharacter() {
  const maxCodePoint = 0x1FFFF;
  const randomCodePoint = Math.floor(Math.random() * (maxCodePoint + 1));
  return String.fromCodePoint(randomCodePoint);
}
