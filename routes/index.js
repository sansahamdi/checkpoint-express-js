var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/* GET services page. */

router.use('/services/:d/:h', (req,res,next)=>{
  if(req.params.d<1||req.params.d>5){
    res.send("<h3>dear customer, our application is only available at the following time slot | from Monday to Friday | 9 am to 5 pm</h3>")
  }else if (req.params.h < 9 || req.params.h > 17){
    res.send("<h3>dear customer, our application is only available at the following time slot | from Monday to Friday | 9 am to 5 pm</h3>")
  }
  next()
})

router.get('/services/:d/:h',(req,res,next)=>{
  res.render('services')
})

/* GET contact page. */

router.use('/contact/:d/:h', (req,res,next)=>{
  if(req.params.d<1||req.params.d>5){
    res.send("<h3>dear customer, our application is only available at the following time slot | from Monday to Friday 9 am to 5 pm</h3>")
  }else if (req.params.h < 9 || req.params.h > 17){
    res.send("<h3>dear customer, our application is only available at the following time slot | from Monday to Friday 9 am to 5 pm</h3>")
  }
  next()
})

router.get('/contact/:d/:h',(req,res,next)=>{
  res.render('contact')
})

module.exports = router;
