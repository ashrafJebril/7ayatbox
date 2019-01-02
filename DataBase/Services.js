const pool = require("./ConnectionPool");

const getAllServices = (categoryName, cb) => {
  pool.getConnection(function(err, con) {
    if (err) console.log("connection err", err);
    console.log("Connected!");
    var sql = `SELECT capacity,description,imageUrl,location,price,rate,title, T3.name AS providerName FROM providerCategories AS T1 JOIN categories AS T2 ON T1.categoryID = T2.id JOIN providers AS T3 ON T1.providerID = T3.id WHERE T2.name = "${categoryName}"`;
    con.query(sql, function(err, result) {
      if (err) console.log("query error", err);
      cb(result,err);
      con.release(); //releasing the connection back to the pool
    });
  });
};

const getRecommendedServices = (
  hallPrice,
  zafehPrice,
  djPrice,
  beautyCentersPrice,
  flowersPrice,
  carsPrice,
  cb
) => {
  pool.getConnection(function(err, con) {
    if (err) console.log("connection err", err);
    console.log("Connected!");
    var sql = `SELECT capacity,description,imageUrl,location,price,rate,title, T3.name AS providerName FROM providerCategories AS T1 JOIN categories AS T2 ON T1.categoryID = T2.id JOIN providers AS T3 ON T1.providerID = T3.id WHERE ((T2.name = "Hall" AND  T1.price <= ${hallPrice}) OR (T2.name = "Zafeh" AND  T1.price <= ${zafehPrice}) OR (T2.name = "DJ" AND  T1.price <= ${djPrice}) OR (T2.name = "Beauty Centers" AND  T1.price <= ${beautyCentersPrice}) OR (T2.name = "Flowers" AND  T1.price <= ${flowersPrice})  OR (T2.name = "Cars" AND  T1.price <= ${carsPrice}))`;
    con.query(sql, function(err, result) {
      if (err) console.log("query error", err);d
      cb(result);
      con.release(); //releasing the connection back to the pool
    });
  });
};

const addService=(capacity,description,imageUrl,location,price,rate,title,providerID,categoryID,cb)=>{
  console.log("my data in sql",capacity,description,imageUrl,location,price,rate,title,providerID,categoryID)
  pool.getConnection(function(err, con) {
    if (err) console.log("connection err", err);
    console.log("Connected!");
    var sql = `INSERT INTO providerCategories (capacity,description,imageUrl,location,price,rate,title,providerID,categoryID) VALUES 
    ("${capacity}","${description}","${imageUrl}","${location}","${price}","${rate}","${title}","${providerID}","${categoryID}")`;
    con.query(sql, function(err, result) {
      if (err) console.log("query error", err);
      console.log("1 record inserted");
      cb(err, result);
      con.release(); //releasing the connection back to the pool
    });
  });
}



 
  
module.exports.addService = addService;
module.exports.getAllServices = getAllServices;
module.exports.getRecommendedServices = getRecommendedServices;
