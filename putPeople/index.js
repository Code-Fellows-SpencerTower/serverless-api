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
  let name = event.queryStringParameters.name;
  let phone = event.queryStringParameters.phone;

  let personObj = { id: id, name: name, phone: phone };

  const updatedPerson = await People.update(personObj);

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('PUT Successful: ', updatedPerson),
  };
  return response;
};