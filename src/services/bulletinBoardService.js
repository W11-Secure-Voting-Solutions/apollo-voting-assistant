function filterBBContent(fetchedData) {
  let publicKey = null;
  let latestRandomness = null;
  let latestChoices = null;
  let latestCastedVote = null;

  for (let i = fetchedData.length - 1; i >= 0; i--) {
    let element = fetchedData[i];

    if (element.hasOwnProperty('choices') && latestChoices === null) {
      latestChoices = element.choices;
    } else if (element.hasOwnProperty('randomness') && latestRandomness === null) {
      latestRandomness = element.randomness;
    } else if (element.hasOwnProperty("castedVoteWithCastCode") && latestCastedVote === null) {
      latestCastedVote = element.castedVoteWithCastCode;
    } else if (element.hasOwnProperty('publicKey') && publicKey === null) {
      publicKey = element.publicKey;
    }
  }
  if (!fetchedData[fetchedData.length-1].hasOwnProperty("randomness")) {
    latestRandomness = null;
    latestChoices = null;
  }
  return { "publicKey": publicKey, "randomness": latestRandomness, "choices": latestChoices, "castedVoteWithCastCode": latestCastedVote }
}

export { filterBBContent }