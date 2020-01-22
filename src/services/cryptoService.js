const CryptoJS = require("crypto-js");

function encrypt (message = '', key = '') {
    message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}

function decrypt (message = '', key = '') {
    const code = CryptoJS.AES.decrypt(message, key);
    return code.toString(CryptoJS.enc.Utf8);
}

export { encrypt, decrypt }