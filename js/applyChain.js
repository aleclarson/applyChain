var assertType;

assertType = require("assertType");

module.exports = function(callbacks, context, args) {
  var callback, index;
  assertType(callbacks, Array);
  if (!callbacks.length) {
    return;
  }
  index = 0;
  if (args && args.length) {
    assertType(args, Array);
    while (true) {
      callback = callbacks[index++];
      if (!callback) {
        return;
      }
      callback.apply(context, args);
    }
    return;
  }
  while (true) {
    callback = callbacks[index++];
    if (!callback) {
      return;
    }
    callback.call(context);
  }
};

//# sourceMappingURL=map/applyChain.map
