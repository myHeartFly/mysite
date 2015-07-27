/**
 * Created by TCDev on 2015/7/24.
 */
var express=require('express');
var app=express();
var path=require('path');
var cookieParser=require('cookie-parser');
var cookieSession=require('cookie-session');

var router=express.Router();
/*app.get(/a*b/,function(req,res){
    console.log('someone visited');
    //res.write('write:you are the first visitor');
    res.send('you are the first visitor at path '+req.originalUrl);
});*/
//app.use(express.static(__dirname+'/public'));
//app.use('/static',express.static('public'));
app.use('/static',express.static('public'));
app.use('/static',express.static(__dirname+'files'));
//passport:username & password
//app.use(cookieParser);
//app.use(cookieSession({name:'mysite:sess',key:'mysite:key',secret:'mysite secret',cookie:{path:'/',maxAge:60*60*1000,httpOnly:false}}));
//var passport=require('passport');
//app.use(passport.initialize());
//app.use(passport.session());

/*app.route(/a*b/)
    .all(function(req,res,next){
    console.log('someone visited');
    //res.write('write:you are the first visitor');
    res.send('you are the first visitor at path '+req.originalUrl);
        next();
    });*/
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


/*
* 公共页面，index
* 未登陆，login
* 登陆后，home
* */
app.get('/',function(req,res){
    console.log(app.get('views'));
    res.render('index');
});
app.post('/login',function(req,res){
    res.send('login page');
});
app.get('/home',function(req,res){
    res.send('home page');
});
 app.listen(3003,function(){
    console.log('app is listening on port 3003');
})
