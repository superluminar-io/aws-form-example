var AWS = require("aws-sdk");
var ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log(JSON.stringify(event));

  const record = event.Records[0];

  if (record.eventName !== "INSERT") {
    return;
  }

  await ddb
    .update({
      TableName: process.env.TABLE_NAME,
      Key: {
        id: record.dynamodb.Keys.id.S,
      },
      UpdateExpression: "set #score = :score",
      ExpressionAttributeNames: {
        "#score": "score",
      },
      ExpressionAttributeValues: {
        ":score": 20,
      },
    })
    .promise();
};
