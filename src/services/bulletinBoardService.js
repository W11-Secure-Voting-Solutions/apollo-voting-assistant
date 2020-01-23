function filterBBContent(fetchedData) {
  let publicKey = null;
  let latestRandomness = null;
  let latestChoices = null;

  for (let i = fetchedData.length - 1; i >= 0; i--) {
    let element = fetchedData[i];

    if (element.hasOwnProperty('choices') && latestChoices === null) {
      latestChoices = element.choices;
    } else if (element.hasOwnProperty('randomness') && latestRandomness === null) {
      latestRandomness = element.randomness;
    } else if (element.hasOwnProperty('publicKey') && publicKey === null) {
      publicKey = element.publicKey;
    }
  }
  return { "publicKey": publicKey, "randomness": latestRandomness, "choices": latestChoices }
}

export { filterBBContent }