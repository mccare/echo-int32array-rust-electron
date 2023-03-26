const { echoInt32ArrayAsync, echoInt32Array} = require('echo-int32array');

async function runEchoInt32ArrayAsync() {
    const input = [
        Int32Array.from([1, 2, 3, 4]),
        Int32Array.from([10, 20, 30, 40]),
        Int32Array.from([100, 200, 300, 400]),
        Int32Array.from([1000000, 2000000, 3000000, 400000])
    ]
    const result = await echoInt32ArrayAsync(input);
    console.log("Echoint32ArrayAsync result", result);
}

function runEchoInt32Array() {
    const input = [
        Int32Array.from([1, 2, 3, 4]),
        Int32Array.from([10, 20, 30, 40]),
        Int32Array.from([100, 200, 300, 400]),
        Int32Array.from([1000000, 2000000, 3000000, 400000])
    ]
    const result =  echoInt32Array(input);
    console.log("Echoint32Array result", result);
}
runEchoInt32Array()
runEchoInt32ArrayAsync().catch(e => console.error(e));

