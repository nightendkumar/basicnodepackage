var properties = require("properties");

properties.parse ("config.properties", { path: true }, function (error: any, obj: any){
    if (error) return console.error (error);
    
    console.log (obj);
    //{ a: 1, b: 2 }
  });