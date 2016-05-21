
assertType = require "assertType"

module.exports = (callbacks, scope, args) ->

  assertType callbacks, Array
  return if not callbacks.length

  if args
    assertType args, Array
    for callback in callbacks
      callback.apply scope, args
    return

  for callback in callbacks
    callback.call scope
  return
