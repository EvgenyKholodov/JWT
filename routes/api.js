var express = require('express');
const router = express.Router();
var jwt =require('jsonwebtoken');

router.get('/' , function (req,res) {

    res.json({
        description: 'My API. Please authenticate!',

    });

});
router.post('/login' , function (req,res) {
    const user = {id: 3};
    const token = jwt.sign({user} , 'key');
    res.json({
        token: token

    });


});

router.get('/protected',ensureToken,function (req,res) {
    jwt.verify(req.token,'key',function (err,data) {
        if(err) {

            res.send('something wrong');
        }
        else {
            res.send('your are welcome!!!')

        }


    });


});

function ensureToken(req,res,next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const ourToken = bearerHeader.split(" ");
        const bearerToken = ourToken[1];
        req.token = bearerToken;
        next();
    } else {
        res.send("SomethingWrong");
    }


}



module.exports = router;

