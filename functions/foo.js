import response from '../includes/response'
import arrayLast from 'array-last'

export default (event, context, callback) => response("A message from foo!", callback)