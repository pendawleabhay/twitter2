/**
 * Created by Chinmay on 19-03-2016.
 */

var ejs = require("ejs");

function goToOtherProfile(req,res){

    ejs.renderFile('../views/OtherProfile.ejs',function (err,result){
        if(!err){

            res.end(result);
        }
        else{
            res.end('An error Occurred');
            console.log(err);
        }
    });
}

exports.goToOtherProfile = goToOtherProfile;