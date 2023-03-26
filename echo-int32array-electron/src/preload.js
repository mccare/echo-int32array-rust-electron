// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { echoInt32ArrayAsync } = require('echo-int32array');

async function echoInt32Array() {
    const input = [
        Int32Array.from([1, 2, 3, 4]),
        Int32Array.from([10, 20, 30, 40]),
        Int32Array.from([100, 200, 300, 400]),
        Int32Array.from([1000000, 2000000, 3000000, 400000])
    ]
    const result = await echoInt32ArrayAsync(input);
    console.log("Echoint32Array result", result);
}

echoInt32Array().catch(e => console.error(e));

