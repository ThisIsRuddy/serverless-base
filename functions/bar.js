const response = require('../includes/response')
const arrayFirst = require('array-first')

module.exports.handler = (event, context, callback) => {
	response("A message from bar!", callback)
}