/**
 * Created by TCDev on 2015/7/24.
 */
var express=require('express');
var app=express();
var router=express.Router();
/*app.get(/a*b/,function(req,res){
    console.log('someone visited');
    //res.write('write:you are the first visitor');
    res.send('you are the first visitor at path '+req.originalUrl);
});*/
app.route(/a*b/)
    .all(function(req,res){
    console.log('someone visited');
    //res.write('write:you are the first visitor');
    res.send('you are the first visitor at path '+req.originalUrl);
    });
app.listen(3003,function(){
    console.log('app is listening on port 3003');
})
