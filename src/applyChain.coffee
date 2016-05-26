
assertType = require "assertType"

module.exports = (callbacks, context, args) ->

  assertType callbacks, Array
  return if not callbacks.length

  index = 0

  if args and args.length
    assertType args, Array
    loop
      callback = callbacks[index++]
      return if not callback
      callback.apply context, args
    return

  loop
    callback = callbacks[index++]
    return if not callback
    callback.call context
  return
