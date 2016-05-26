
# applyChain 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Calls each `Function` in a given `Array`.

- If you push to the given `Array` while `applyChain` is running, it will not be ignored!

```coffee
applyChain = require "applyChain"

applyChain callbacks, context, args
```
