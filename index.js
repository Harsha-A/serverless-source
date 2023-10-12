const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

exports.handler = async (event) => {
  try {

    const params = {
      FunctionName: 'arn:aws:lambda:us-east-1:8171937381719373:function/lambdaFunc',
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify(event),
    };

    const response = await lambda.invoke(params).promise();

    return {
      statusCode: 200,
      body: response.Payload
    };
  } catch (error) {
    console.error('Error invoking Lambda in the target account:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error invoking Lambda in the target account' })
    };
  }
};
