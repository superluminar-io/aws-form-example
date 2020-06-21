var AWS = require("aws-sdk");
var s3 = new AWS.S3();

exports.handler = async (event) => {
  console.log(JSON.stringify(event));
  const item = event.Records[0];

  await s3
    .putObject({
      Body: JSON.stringify(item.dynamodb),
      Bucket: process.env.BUCKET_NAME,
      Key: item.eventID,
    })
    .promise();

  return true;
};
