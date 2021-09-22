const fs = require("fs");
const path = require("path");

const readFile =(filePath)=>
new Promise ((resolve,reject)=>{
fs.readFile(filePath,{encoding:"utf-8"},(err,data)=>{
if(err) reject (err)
else resolve(data);
    });
});

const writeFile=(filePath,content)=>
new Promise ((resolve,reject)=>{
fs.writeFile(filePath,content,(err)=>{
    if(err) reject (err)
else resolve();
      });
});
const readdir=(filePath)=>
new Promise ((resolve,reject)=>{
fs.readdir(filePath,(err,data)=>{
    if(err) reject (err)
else resolve(data);
      });
});

readFile("./testFile2.txt")
.then((data)=> writeFile("./newFile.txt",data))
.then(()=>readdir("./"))
.then(console.log)
.catch(console.error);