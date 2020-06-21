var AWS = require("aws-sdk");
var ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log(JSON.stringify(event));

  if (event.requestContext.http.method === "POST") {
    const body = JSON.parse(event.body);
    await ddb
      .put({
        TableName: process.env.TABLE_NAME,
        Item: {
          id: new Date().toISOString(),
          name: body.name,
          message: body.message,
        },
      })
      .promise();
  }

  return {
    statusCode: 200,
    body: '{"message": "done"}',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    },
  };
};
