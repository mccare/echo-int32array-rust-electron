# Int32Array is not transfered correctly in electron

**This problem is fixed in Napi-rs**


The following is shown:

* Int32Array is transfered correctly in the async case in node environment (18.12.1)
* Int32Array is transfered incorrectly in the async case (only first element) in case of electron (23.2.0)
* The synchronous case works in boths environments
* Tested on M1 Macbook

## How to install/use
With yarn 3.5:
```shell
cd echo-int32array
yarn install
yarn build
```

```shell
cd echo-int32array-electron
yarn install
yarn start
```

## Running with node 

in echo-int32array-electron:

`node test.js`

The output is the same as the input


## Running with electron

The test code is in runEchoInt32ArrayAsync in index.js 

Just start electron in echo-int32array-electron directory:

`yarn start`

The output of the index.js will be:
```shell
Echoint32Array result [                                                                                                                                                                                                                         
  Int32Array(4) [ 1, 2, 3, 4 ],
  Int32Array(4) [ 10, 20, 30, 40 ],      
  Int32Array(4) [ 100, 200, 300, 400 ],
  Int32Array(4) [ 1000000, 2000000, 3000000, 400000 ]                                                                                             ] 
  
Echoint32ArrayAsync result [                                                                                                                        Int32Array(4) [ 1, 0, 0, 0 ],                                                                                                                    Int32Array(4) [ 10, 0, 0, 0 ],                                                                                                                   Int32Array(4) [ 100, 0, 0, 0 ],                                                                                                                  Int32Array(4) [ 1000000, 0, 0, 0 ]                                                                                                             ]        
```