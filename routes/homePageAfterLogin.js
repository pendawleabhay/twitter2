/**
 * Created by Chinmay on 10-03-2016.
 */
var ejs = require("ejs");

function goToHomePageAfterLogin(req,res){

    /*ejs.renderFile('./views/success.ejs',function (err,result){
        if(!err){
            res.end(result);
        }
        else{
            res.end('An error Occurred');
            console.log(err);
        }
    });*/
    if(req.session.handle)
    {
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.render("homePageAfterLogin",{handle:req.session.handle});
    }
    else
    {
        res.redirect('/');
    }
}

exports.goToHomePageAfterLogin = goToHomePageAfterLogin;