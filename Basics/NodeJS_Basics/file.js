const fs = require('fs');


//reading files
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log(error)
    }
    console.log(data.toString())
})

//write files
fs.writeFile('./docs/blog2.txt','Hello World',()=>{
    console.log("File was written")
})


//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        else{   
            console.log("Directory Created")
        }
    })
}
else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Deleted Directory")
    })
}