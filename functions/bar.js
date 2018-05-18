import response from '../includes/response'
import arrayFirst from 'array-first'

export default (event, context, callback) => response("A message from bar!", callback)