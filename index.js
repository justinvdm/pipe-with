function pipeList(fns) {
  return function pipeFn(v0) {
    var i = -1
    var n = fns.length
    var v = v0

    while (++i < n) v = fns[i](v)

    return v
  }
}

function pipe() {
  return pipeList(arguments)
}

function pipeWith(bindFn) {
  return function pipeWithFn(fn0) {
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
