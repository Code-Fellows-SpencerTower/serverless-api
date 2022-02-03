'use strict';
// this lambda responds to the /people POST request

//  Given a JSON body, inserts a record into the database
// returns an object representing one record, by its id (##)
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
  let phone = event.qureyStringParameters.phone;

  // try {
  // const person = await People.create({ id: '1', name: 'Spencer', phone: '206555555' });
  const person = await People.create({ id: id, name: name, phone: phone });
  // If a user with `id=1` already exists in the table, an error will be thrown.
  //   console.log(person);
  // } catch (e) {
  //   console.error(e);
  // }


  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Person added: ', person),
  };
  return response;
};