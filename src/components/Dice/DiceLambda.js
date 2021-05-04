/*****************************************************************************
This file lives on an AWS lambda function at the URL
  https://rdy5i3cmkd.execute-api.us-west-1.amazonaws.com/prod/Dice
*****************************************************************************/

// dependencies
const AWS = require('aws-sdk');
const util = require('util');

// get reference to S3 client
const s3 = new AWS.S3();
const BASEURL = "https://retrospective-toolkit.s3-us-west-1.amazonaws.com/";

/**
 * Makes the call to AWS and formats the response into a neat Array of JSON objects, each object representing an image.
 * @returns the full dice array, non randomized, containing all useful information.
 */
exports.handler = async (event, context, callback) => {

    // Read options from the event parameter.
    console.log("Reading options from event:\n", util.inspect(event, {depth: 5}));

    // Download the image from the S3 source bucket. 

    try {
        const params = {
            Bucket: "retrospective-toolkit",
            Prefix: "Dice/Themes/",
        };
    const getS3Objects = await s3.listObjectsV2(params).promise();
    getS3Objects.Contents.shift();
    return formatDiceArray(getS3Objects.Contents);
  
    
    } catch (error) {
        console.log(error);
        return;
    }  
};

/**
 * Formats the Content into a usuable array for the rest of the project.
  
 * An example object is:
  {
    Key: 'Dice/Themes/insert_photo.png',
    LastModified: 2021-01-23T03:46:55.000Z,
    ETag: '"3610cd99a0afa5fdd64dcdda8a62ea97"',
    Size: 329,
    StorageClass: 'STANDARD'
  }

  We really only care about "Key" field here. It has all the info we need.

 * @param S3Content the content array received from the S3 Bucket
 */
const formatDiceArray = (S3Content) => {
  const fullDiceArray = [];
  // Iterate over each object in Content Array
  S3Content.forEach((S3Object) => {
    // Make sure no info is clean through each iteration
    let name = "";
    const formattedDiceEntry = {
      URL: BASEURL,
      Name: "",
      Theme: "",
    };

    // An example URL is "https://retrospective-toolkit.s3-us-west-1.amazonaws.com/Dice/Themes/Action/alt_route-24px.svg"
    formattedDiceEntry.URL += S3Object.Key;

    // Second to last in array should be theme, last one should be unformatted name
    const KeyArray = S3Object.Key.split("/");
    name = KeyArray[KeyArray.length - 1];
    formattedDiceEntry.Theme = KeyArray[KeyArray.length - 2];

    // In case we take out the "-24px" in the S3 bucket
    const pxIndex = name.indexOf("-");
    if (pxIndex !== -1) {
      name = name.substr(0, pxIndex);
    }
    name = name.replace("_", " ");
    formattedDiceEntry.Name = name;

    fullDiceArray.push(formattedDiceEntry);
  });
  return fullDiceArray;
};
