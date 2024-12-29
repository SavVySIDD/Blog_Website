const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt')

readStream.on('data',(chunk)=>{
    console.log('\n')
    console.log('---NEW CHUNK---');
    console.log('\n')
    console.log(chunk)
    // console.log(chunk.toString())
})