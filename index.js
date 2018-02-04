;(function (root, factory) {
  if (typeof root.define === 'function' && root.define.amd) {
    root.define(function () {
      return factory({})
    })
  } else if (typeof exports === 'object') {
    factory(exports)
  } else {
    root.pipeWith = factory({})
  }
})(this || 0, function (exports) {
  'use strict'

  function pipeList (fns) {
    return function pipeFn (v0) {
      var i = -1
      var n = fns.length
      var v = v0

      while (++i < n) v = fns[i](v)

      return v
    }
  }

  function pipe () {
    return pipeList(arguments)
  }

  function pipeWith (bindFn) {
    return function pipeWithFn (fn0) {
      var args = arguments
      if (!args.length) return pipeList([])

      var res = [fn0]
      var n = args.length
      var i = 0

      while (++i < n) res.push(bindFn(args[i]))

      return pipeList(res)
    }
  }

  exports.pipe = pipe
  exports.pipeWith = pipeWith
})
