/**
 * Created by Chinmay on 17-03-2016.
 */
var ejs = require("ejs");

function goToHandleSearchPage(req,res){

    ejs.renderFile('../views/handleSearchPage.ejs',function (err,result){
        if(!err){

            res.end(result);
        }
        else{
            res.end('An error Occurred');
            console.log(err);
        }
    });
}

exports.goToHandleSearchPage = goToHandleSearchPage;