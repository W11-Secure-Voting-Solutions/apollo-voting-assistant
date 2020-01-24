import CryptoJS from "crypto-js";
import { getterTypes } from "../store/types";
import store from "../store/store";
const bigintModArith = require('bigint-mod-arith');


function decryptBBContent(bbContent) {
    let { parsedPublicKey, randomness, parsedChoices } = parseData(bbContent);
    const decryptedRandomness = decryptRandomness(randomness);
    const decryptedChoices = decryptChoices(parsedPublicKey, parsedChoices, decryptedRandomness);
    return { decryptedChoices };
}

function parseData(bbContent) {
    const { publicKey, randomness, choices } = bbContent;
    const parsedPublicKey = JSON.parse(publicKey);
    const parsedChoices = JSON.parse(choices);
    return { parsedPublicKey, randomness, parsedChoices };
}

function decryptRandomness(randomness) {
    const kRand = store.getters[getterTypes.GET_K_RAND];
    const decryptedRandomnessString = decryptWithAES(randomness, kRand);
    return JSON.parse(decryptedRandomnessString);
}

function decryptWithAES(message = '', key = '') {
    const output = CryptoJS.AES.decrypt(message, key);
    return output.toString(CryptoJS.enc.Utf8);
}

function decryptChoices(publicKey, choices, randomness) {
    return decryptWithElGamal(publicKey, choices, randomness);
}

function decryptWithElGamal(publicKey, choices, randomness) {
    let { g, p, q, y, choicesBigInt, randomnessBigInt } = mapToBigInt(publicKey, choices, randomness);

    let decryptedChoices = [];

    for (let i = 0; i < choicesBigInt.length; i++) {
        const { alpha, beta } = choicesBigInt[i];
        const r = randomnessBigInt[i];
        let result = (beta * bigintModArith.modInv(bigintModArith.modPow(y, r, p), p)) % p;
        decryptedChoices.push(result);
    }
    return decryptedChoices;
}

function mapToBigInt(publicKey, choices, randomness) {
    let { g, p, q, y } = publicKey;
    g = BigInt(g);
    p = BigInt(p);
    q = BigInt(q);
    y = BigInt(y);
    const choicesBigInt = choices.map(({alpha, beta}) => {
        return {"alpha":BigInt(alpha), "beta": BigInt(beta)}
    });
    const randomnessBigInt = randomness.map(BigInt);
    return {g, p, q, y, choicesBigInt, randomnessBigInt}
}

function encryptWithAES(message = '', key = '') {
    message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}

export { decryptBBContent }
