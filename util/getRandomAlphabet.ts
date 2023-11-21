export const randStringGen = (length: number) => {
  const lowerUpperAlphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randString = '';
  for (let i = 0; i < length; i += 1) {
    const ranNum = parseInt(String(Math.random() * lowerUpperAlphabets.length));
    randString = randString.concat(lowerUpperAlphabets[ranNum]);
  }
  return randString;
}