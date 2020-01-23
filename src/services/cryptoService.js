import CryptoJS from "crypto-js";
import { getterTypes } from "../store/types";
import store from "../store/store";
import { createPublicKey } from "crypto";


function decryptBBContent(bbContent) {
    let { parsedPublicKey, randomness, parsedChoices } = parseData(bbContent);
    const decryptedRandomness = decryptRandomness(randomness); // TODO: convert to array
    // const decryptedChoices = decryptChoices(publicKey, choices, decryptedRandomness);
    return { decryptedRandomness };
}

function parseData(bbContent) {
    const { publicKey, randomness, choices } = bbContent;
    const parsedPublicKey = JSON.parse(publicKey);
    const parsedChoices = JSON.parse(choices);
    return { parsedPublicKey, randomness, parsedChoices };
}

function decryptRandomness(randomness) {
    const kRand = store.getters[getterTypes.GET_K_RAND];
    debugger;
    const decryptedRandomnessString = decryptWithAES(randomness, kRand);
    return JSON.parse(decryptedRandomnessString);
}

function decryptWithAES(message = '', key = '') {
    const output = CryptoJS.AES.decrypt(message, key);
    debugger;
    return output.toString(CryptoJS.enc.Utf8);
}

function decryptChoices(publicKey, choices, randomness) {

    return decryptWithElGamal();
}

function encryptWithAES(message = '', key = '') {
    message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}

export { decryptBBContent }
