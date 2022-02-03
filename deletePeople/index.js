'use strict';


const dynamoose = require('dynamoose');

exports.handler = async (event) => {

  // structure table data
  let peopleSchema = new dynamoose.Schema({
    id: String,
    name: String,
    phone: String,
  });
  // method uses string provided to talk to the table with same name in DynamoDB
  let People = dynamoose.model('people', peopleSchema);

  let id = event.queryStringParameters.id;

  // delete person by id
  const deletedPerson = await People.delete({ id: id });

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('DELETE Successful: ', deletedPerson),
  };
  return response;
};