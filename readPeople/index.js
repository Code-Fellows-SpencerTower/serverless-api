const dynamoose = require('dynamoose');

exports.handler = async (event) => {

  console.log(event.queryStringParameters);
  console.log(event.pathParameters)
  console.log(`Event Body: ${event.body}, Event Resource: ${event.resource}, Event HTTP Method: ${event.httpMethod}`);

  // structure table data
  let peopleSchema = new dynamoose.Schema({
    id: String,
    name: String,
    phone: String,
  });

  // method uses string provided to talk to the table with same name in DynamoDB
  let People = dynamoose.model('people', peopleSchema);

  // exec() = execute query
  // get specific id
  // let person = await People.query('id').eq(id).exec();

  // get all records from people table
  let peopleRecords = await People.scan().exec();

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(peopleRecords),
  };
  return response;
};