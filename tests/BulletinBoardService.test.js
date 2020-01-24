import { filterBBContent } from "../src/services/bulletinBoardService.js";


// test('Correctly filters BB content for no content', () => {
//   const BBContent = [];
//   const output = filterBBContent(BBContent);
//   const expectedOutput = {
//     "publicKey": null,
//     "randomness": null,
//     "choices": null
//   };
//   expect(output).toStrictEqual(expectedOutput);
// });


// test('Correctly filters BB content for public key only', () => {
//   const BBContent = [
//     {
//       "publicKey": "pub_key"
//     },
//   ];
//   const output = filterBBContent(BBContent);
//   const expectedOutput = {
//     "publicKey": "pub_key",
//     "randomness": null,
//     "choices": null
//   };
//   expect(output).toStrictEqual(expectedOutput);
// });


// test('Correctly filters BB content for many entries', () => {
//   const BBContent = [
//     {
//       "publicKey": "pub_key"
//     },
//     {
//       "randomness": ["r1", "r2"]
//     },
//     {
//       "choices": ["c1", "c2"]
//     },
//     {
//       "randomness": ["r3", "r4"]
//     },
//     {
//       "choices": ["c3", "c4"]
//     }
//   ];
//   const output = filterBBContent(BBContent);
  
//   const expectedOutput = {
//     "publicKey": "pub_key",
//     "randomness": ["r3", "r4"],
//     "choices": ["c3", "c4"],
//   };
//   expect(output).toStrictEqual(expectedOutput);
// });

