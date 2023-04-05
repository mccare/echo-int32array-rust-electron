const { echoInt32ArrayAsync, echoInt32Array, echoInt32ArrayAsArrayAsync} = require('echo-int32array');
const { runEchoInt32ArrayAsync, runEchoInt32Array, runEchoInt32ArrayAsArrayAsync } = require('./src/echoArray')

runEchoInt32Array()
runEchoInt32ArrayAsync().catch(e => console.error(e));
runEchoInt32ArrayAsArrayAsync().catch(e => console.error(e));

