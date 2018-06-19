function process (event, context, callback) {
  const resp = { message: "I processed some data!" }
  callback(null, {
    statusCode: 201,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(resp)
  })
}

module.exports = { process }
