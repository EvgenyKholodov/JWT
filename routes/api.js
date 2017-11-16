var express = require('express');
const router = express.Router();


router.get('/' , function (req,res) {

    res.json({
        text: 'api'
    });

});




module.exports = router;