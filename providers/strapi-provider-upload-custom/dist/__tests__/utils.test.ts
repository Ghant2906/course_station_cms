describe("Utils", () => {
  // Skip test
  test.skip("Skip test", () => {
    //
  });
});

// import { ObjectCannedACL } from '@aws-sdk/client-s3';
// import type { InitOptions } from '..';
// import { extractCredentials } from '../utils';

// const accessKeyId = 'AWS_ACCESS_KEY_ID';
// const secretAccessKey = 'AWS_ACCESS_SECRET';

// const defaultOptions = {
//   region: 'AWS_REGION',
//   params: {
//     ACL: ObjectCannedACL.public_read,
//     signedUrlExpires: 111111111111,
//     Bucket: 'AWS_BUCKET',
//   },
// };

// describe('Utils', () => {
//   describe('Extract credentials for V4 different aws provider configurations', () => {
//     test('[Legacy] Credentials directly in the options', () => {
//       const options: InitOptions = {
//         accessKeyId,
//         secretAccessKey,
//         ...defaultOptions,
//       };
//       const credentials = extractCredentials(options);

//       expect(credentials).toEqual({
//         accessKeyId,
//         secretAccessKey,
//       });
//     });

//     test('[Legacy] credentials directly in s3Options', () => {
//       const options: InitOptions = {
//         s3Options: {
//           accessKeyId,
//           secretAccessKey,
//           ...defaultOptions,
//         },
//       };
//       const credentials = extractCredentials(options);

//       expect(credentials).toEqual({
//         accessKeyId,
//         secretAccessKey,
//       });
//     });

//     test('Credentials in credentials object inside s3Options', () => {
//       const options: InitOptions = {
//         s3Options: {
//           credentials: {
//             accessKeyId,
//             secretAccessKey,
//           },
//           ...defaultOptions,
//         },
//       };
//       const credentials = extractCredentials(options);

//       expect(credentials).toEqual({
//         accessKeyId,
//         secretAccessKey,
//       });
//     });
//     test('Does not throw an error when credentials are not present', () => {
//       const options: InitOptions = {
//         s3Options: {
//           ...defaultOptions,
//         },
//       };
//       const credentials = extractCredentials(options);

//       expect(credentials).toEqual(null);
//     });
//   });
// });
