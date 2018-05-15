const response = require('../includes/response')
const arrayLast = require('array-last')

module.exports.handler = (event, context, callback) => {
	response("A message from foo!", callback)
}