import test from 'ava'

import { echoInt32ArrayAsync, echoInt32Array } from '../index.js'

test('echo int32 array async', async (t) => {
  const input = [
    Int32Array.from([1,2,3,4]),
    Int32Array.from([10,20,30,40]),
    Int32Array.from([100,200,300,400]),
    Int32Array.from([1000000,2000000,3000000,400000])
  ]
  const result = await echoInt32ArrayAsync(input);
  t.deepEqual(input, result);
})

test('echo int32 array', async (t) => {
  const input = [
    Int32Array.from([1,2,3,4]),
    Int32Array.from([10,20,30,40]),
    Int32Array.from([100,200,300,400]),
    Int32Array.from([1000000,2000000,3000000,400000])
  ]
  const result = echoInt32Array(input);
  t.deepEqual(input, result);
})
