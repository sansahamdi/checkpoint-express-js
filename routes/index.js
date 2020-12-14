var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/* GET services page. */

router.use('/services/:d/:h', (req,res,next)=>{
  if(req.params.d<1||req.params.d>5){
    res.send("L'application web n'est disponible que pendant les heures de travail du lundi au vendredi ")
  }else if (req.params.h < 9 || req.params.h > 17){
    res.send("L'application web n'est disponible que pendant les heures de travail de 9 à 17")
  }
  next()
})

router.get('/services/:d/:h',(req,res,next)=>{
  res.render('services')
})

// router.get('/services/:d/:h', function(req, res, next) {
//   if(req.params.d<1||req.params.d>5){
//     res.send('sorry our application is not available tody')
//   }
//   else if(req.params.h<9||req.params.h>19){
//     res.send('sorry our aplication is not available tody')
//   }else
//   res.render('services');
// });
// router.get('/services', function(req,res,next){
//   res.render('services')
// })
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
