const AWS = require('aws-sdk')

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_DEFAULT_REGION || 'us-east-1'
})

const tableName = process.env.analyticsTableName

function analyze (event, context, callback) {
  const sourceData = JSON.parse(event.body)
  
  const item = {
    id: sourceData.id,
    message: sourceData.message.toUpperCase()
  }

  dynamoDB.put({
    Item: item,
    TableName: tableName
  },
  (error, response) => {
    if (error) {
      callback(error)
    } else {
      callback(null, {
        statusCode: 201,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(response)
      })
    }
  })
}

module.exports = { analyze }
