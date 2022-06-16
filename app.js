//fs or file system is not working here

// const fs = require('fs');
const geojsondata=[];

fetch("./geojson.json").then(data=>{
    return data.json();
}).then(jsondata=>{
    
    jsondata.forEach(element => {
        geojsondata.push({
            "type": "Feature",
            "geometry": {
              "type": "Polygon",
              "coordinates": [[`${element.top}`,`${element.left}`],[`${element.bottom}`,`${element.right}`]]
            },
            "properties": {
              "num_of_points": `${element.num_of_points}`,
              "F":`${element.F}`,
              "H":`${element.H}`,
              "L":`${element.L}`,
              "P":`${element.P}`,
            }
          });
    });
    // console.log(geojsondata);
    //fs is not running here
    // fs.writeFile('griddata.json',JSON.stringify(geojsondata),err=>{
    //     if(err)
    //     {
    //         console.log(err);
    //     }
    //     else{
    //         console.log(geojsondata);
    //     }
    // })
    
}).catch(err=>{
    console.log(err);
})
export default geojsondata;
var map = L.map('map').setView([22.9074872, 79.07306671], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// const eventsLayer = L.geoJSON(geojsondata, {
//   //this is the icon layer
//   //here we will be receiving the shop object, and the latitude and longitude of that object -> feature here
//   pointToLayer: function(feature, latlng){
//     // latlng.forEach(lat_lng=>{
      
      
//     // })
//     console.log(latlng);
//     return L.rectangle(latlng, {color: 'red'});
      
//   }
// })
// eventsLayer.addTo(map);
var myLayer = L.geoJSON().addTo(map);
myLayer.addData(geojsondata);

