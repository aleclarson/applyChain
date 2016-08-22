
assertType = require "assertType"

applyChain = (callbacks, context, args) ->

  assertType callbacks, Array
  return if not callbacks.length

  index = 0

  if args and args.length
    loop
      callback = callbacks[index++]
      return if not callback
      if callback.length
        callback.apply context, args
      else callback.call context
    return

  loop
    callback = callbacks[index++]
    return if not callback
    callback.call context
  return

module.exports = applyChain
