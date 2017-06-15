/**
 * Created by Chinmay on 07-03-2016.
 */
var ejs = require("ejs");
var mysql = require('./mysql');

function goToHomePage(req,res){
   // mysql.getPoolConnection();

    ejs.renderFile('../views/Home.ejs',function (err,result){
     if(!err){
         res.end(result);
     }
      else{
         res.end('An error Occurred');
         console.log(err);
     }
  });
}

exports.goToHomePage = goToHomePage;