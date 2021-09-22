const fs = require("fs");
const path = require("path");
const writeFile =(filePath, content)=>
new Promise ((resolve,reject)=>{
fs.writeFile(filePath,content, (err,)=>{

if(err) reject (err)
else resolve();
    
    
    });
});
writeFile("./testFile2.txt", "this is my text").then( console.log)