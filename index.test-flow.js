// @flow

import { pipeWith } from '.'

const test = (description, fn) => {}

test('pipeWith', () => {
  const bind = <A, B>(
    fn: A => Promise<B>
  ): ((Promise<A>) => Promise<B>) => ma => ma.then(fn)

  const pipe = pipeWith(bind)

  pipe(
    (v: number): Promise<number> => Promise.resolve(v * 2),
    (v: number): Promise<number> => Promise.resolve(v + 1),
    (v: number): Promise<number> => Promise.resolve(v * 3)
  )

  // $ExpectError
  pipe(
    (v: number): Promise<number> => Promise.resolve(v * 2),
    (v: string): Promise<string> => Promise.resolve(v.toString()),
    (v: number): Promise<number> => Promise.resolve(v * 3)
  )

  pipe(
    (v: string): Promise<string> => Promise.resolve(v.toString()),
    (v: string): Promise<string> => Promise.resolve(v.toString()),
    (v: string): Promise<string> => Promise.resolve(v)
  )
})
