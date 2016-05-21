
# applyChain 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```coffee
applyChain = require "applyChain"

chain = []
chain.push (x, y) -> @log "a = " + (x + y)
chain.push (x, y) -> @log "b = " + (x * y)

applyChain chain, console, [ 2, 4 ]

# Terminal output:
#   "a = 6"
#   "b = 8"
```
