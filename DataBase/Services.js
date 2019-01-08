const pool = require("./ConnectionPool");

//getting all the services for a selected category
const getAllServices = (categoryName, cb) => {
  pool.getConnection(function(err, con) {
    if (err) console.log("connection err", err);
    console.log("Connected!");
    var sql = `SELECT capacity,description,imageUrl,location,price,rate,title,providerID,categoryID,T1.id as serviceID, T3.name AS providerName FROM services AS T1 JOIN categories AS T2 ON T1.categoryID = T2.id JOIN providers AS T3 ON T1.providerID = T3.id WHERE T2.name = "${categoryName}"`;
    con.query(sql, function(err, result) {
      if (err) console.log("query error", err);
      cb(result, err);
      con.release(); //releasing the connection back to the pool
    });
  });
};
//getting plan recommendation based on the passed in budget
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
    var sql = `SELECT capacity,description,imageUrl,location,price,rate,title,T2.name as category ,T1.id as serviceId , T1.providerID as providerID, T3.name AS providerName FROM services AS T1 JOIN categories AS T2 ON T1.categoryID = T2.id JOIN providers AS T3 ON T1.providerID  = T3.id WHERE ((T2.name = "Hall" AND  T1.price <= ${hallPrice}) OR (T2.name = "Zafeh" AND  T1.price <= ${zafehPrice}) OR (T2.name = "DJ" AND  T1.price <= ${djPrice}) OR (T2.name = "BeautyCenter" AND  T1.price <= ${beautyCentersPrice}) OR (T2.name = "Flower" AND  T1.price <= ${flowersPrice})  OR (T2.name = "Car" AND  T1.price <= ${carsPrice}))`;
    con.query(sql, function(err, result) {
      if (err) console.log("query error", err);
      cb(result);
      con.release(); //releasing the connection back to the pool
    });
  });
};

const addService = (
  capacity,
  description,
  imageUrl,
  location,
  price,
  rate,
  title,
  providerID,
  categoryID,
  cb
) => {
  pool.getConnection(function(err, con) {
    if (err) console.log("connection err", err);
    console.log("Connected!");
    var sql = `INSERT INTO services (capacity,description,imageUrl,location,price,rate,title,providerID,categoryID) VALUES 
    ("${capacity}","${description}","${imageUrl}","${location}","${price}","${rate}","${title}","${providerID}","${categoryID}")`;
    con.query(sql, function(err, result) {
      if (err) console.log("query error", err);
      console.log("1 record inserted");
      cb(err, result);
      con.release(); //releasing the connection back to the pool
    });
  });
};

const getProviderServices = (providerId, cb) => {
  pool.getConnection(function(err, con) {
    if (err) console.log("get provider services connection err", err);
    con.query(`SELECT capacity,description,imageUrl,location,price,rate,title ,T2.name as providerName FROM services as T1 join providers as T2 on T1.providerID=T2.id where T2.id = "${providerId}"`, function(
      err,
      results
    ) {
      if (err) console.log("provider query error", err);
      //results is the returned array of objects
    
      cb(err,results)
      con.release();
    });
  });
};

module.exports.addService = addService;
module.exports.getAllServices = getAllServices;
module.exports.getRecommendedServices = getRecommendedServices;
module.exports.getProviderServices=getProviderServices;
