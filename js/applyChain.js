var applyChain, assertType;

assertType = require("assertType");

applyChain = function(callbacks, context, args) {
  var callback, index;
  assertType(callbacks, Array);
  if (!callbacks.length) {
    return;
  }
  index = 0;
  if (args && args.length) {
    while (true) {
      callback = callbacks[index++];
      if (!callback) {
        return;
      }
      if (callback.length) {
        callback.apply(context, args);
      } else {
        callback.call(context);
      }
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

module.exports = applyChain;

//# sourceMappingURL=map/applyChain.map
