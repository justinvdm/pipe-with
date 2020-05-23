const test = require('ava')
const { pipe, pipeWith } = require('..')

test('pipe', t => {
  const fn = pipe(v => v + 1, v => v * 2)
  t.is(fn(2), 6)
})

test('pipe: no args', t => {
  t.is(pipe()(2), 2)
})

test('pipeWith', t => {
  const p = pipeWith(fn => d => fn(d.v))
  const fn = p(v => ({ v: v + 1 }), v => ({ v: v * 2 }))
  t.deepEqual(fn(2), { v: 6 })
})

test('pipeWith: no args', t => {
  const p = pipeWith(fn => d => fn(d.v))
  t.is(p()(2), 2)
})
