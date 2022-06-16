//here the fetch is not working but the fs is working
// const CSVToJSON = require('csvtojson');

//fs is already the part of node so no need to npm i for it
const fs = require('fs');

const geojsondata = require('./app.js');

console.log(geojsondata);
fs.writeFile('griddata.json',JSON.stringify(geojsondata),err=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(geojsondata);
    }
})
