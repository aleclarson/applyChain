var assertType;

assertType = require("assertType");

module.exports = function(callbacks, scope, args) {
  var callback, i, j, len, len1;
  assertType(callbacks, Array);
  if (!callbacks.length) {
    return;
  }
  if (args) {
    assertType(args, Array);
    for (i = 0, len = callbacks.length; i < len; i++) {
      callback = callbacks[i];
      callback.apply(scope, args);
    }
    return;
  }
  for (j = 0, len1 = callbacks.length; j < len1; j++) {
    callback = callbacks[j];
    callback.call(scope);
  }
};

//# sourceMappingURL=../../map/src/applyChain.map
