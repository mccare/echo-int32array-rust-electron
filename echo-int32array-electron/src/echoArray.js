const { echoInt32ArrayAsync, echoInt32Array, echoInt32ArrayAsArrayAsync} = require('echo-int32array');

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

async function runEchoInt32ArrayAsArrayAsync() {
    const input = [
        Int32Array.from([1, 2, 3, 4]),
        Int32Array.from([10, 20, 30, 40]),
        Int32Array.from([100, 200, 300, 400]),
        Int32Array.from([1000000, 2000000, 3000000, 400000])
    ]
    const result =  await echoInt32ArrayAsArrayAsync(input);
    const int32ArrayResult = []
    for (let row of result) {
        const int32Row = new Int32Array(row.length);
        for (let i=0; i<row.length; i+=1)  {
            int32Row[i] = row[i];
        }
        int32ArrayResult.push(int32Row)
    }
    console.log("echoInt32ArrayAsArrayAsync result", int32ArrayResult);
}
module.exports = {
    runEchoInt32ArrayAsArrayAsync, runEchoInt32Array, runEchoInt32ArrayAsync
}