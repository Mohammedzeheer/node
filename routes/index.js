var express = require('express');
var router = express.Router();
const { application } = require('express');
const { response } = require('../app');
var nocache=require('nocache');
var error1
// var val="zeheer"


// get login page
router.get('/',nocache(),function(req, res, next) {
  if(req.session.user==true)
  {
    res.redirect('/home')
  }
  else
  {
    res.render('login',{error1}); 
    error1=null
  }   
});


//please home page 
router.get('/home',nocache(),function(req,res,next){
  // res.render('home')
  if(req.session.user==true)
  {
    res.render('home')
  }   
  else
  {
    res.redirect('/')
  }

})


// router.get('/card',function(req,res, next){
//   res.render('card',{cards})
// })


{
  products=[  
    {
      name: "iPhone 14",
      category: "Mobile",
      description: "Example",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1654893618197"
    },
    {
      name: "iPhone 13",
      category: "Mobile",
      description: "Example",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-2-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662129021500"
    },
    {
      name: "iPhone 12",
      category: "Mobile",
      description: "Example",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-3-202207_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662128988137"
    },
    {
      name: "iPhone 11",
      category: "Mobile",
      description: "Example",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue_AV1_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027868571"
    }
  ]
}


//cards get
router.get('/card', function(req, res, next) {
if(req.session.user==true){
  res.render('card', {products});
}
else
{
  res.redirect('/')
}
})


{myphones= ["Iphone xs", "Iphone 11","Iphone 12","Iphone 12 pro","Iphone 13","Iphone 13 pro","Iphone 14"]}  
///lists get
router.get('/list',(req,res,next)=>{
  if(req.session.user==true){
    res.render('list',{myphones})
  }
  else
  {
    res.redirect('/')
  }
})

var people = [
  { "Sl.no": 1, "Brand": "Apple", "Model": "iPhone 14", "Price": 71500 },
  { "Sl.no": 2, "Brand": "Apple", "Model": "iPhone 14 plus", "Price": 80999 },
  { "Sl.no": 3, "Brand": "Apple", "Model": "iPhone 14 pro", "Price": 120900 },
  { "Sl.no": 4, "Brand": "Apple", "Model": "iPhone 13", "Price": 60900 },
  { "Sl.no": 5, "Brand": "Apple", "Model": "iPhone 13 pro", "Price": 73990 },
  { "Sl.no": 6, "Brand": "Apple", "Model": "iPhone 13 pro max", "Price": 113900 },
  { "Sl.no": 7, "Brand": "Apple", "Model": "iPhone 12", "Price": 50900 },
  { "Sl.no": 8, "Brand": "Apple", "Model": "iPhone 12 mini", "Price": 41999 },
  { "Sl.no": 9, "Brand": "Apple", "Model": "iPhone 12 pro", "Price": 78900 },
  { "Sl.no": 10, "Brand": "Apple", "Model": "iPhone 12 pro max", "Price": 95900 },
  { "Sl.no": 11, "Brand": "Apple", "Model": "iPhone 11 pro", "Price": 79990 },
  { "Sl.no": 12, "Brand": "Apple", "Model": "iPhone 11 ", "Price": 38900 },
];

//tables get
router.get('/table',function(req,res,next){
  if(req.session.user==true){   
      res.render('table',{people})
    }
    else{
      res.redirect('/')
    }
})



////POST LOGIN PAGE
var user1={ email:"zeheerzak@gmail.com", password:123456}

 router.post('/login',(req,res,next)=>{  
  const re=req.body
  console.log(re);
      if(re.email==user1.email&&re.password==user1.password)
      {
          //session
          req.session.user=true 
          //here where page to go write inside bracket
          res.redirect('/home')                 
      }
      else{ 
          res.redirect('/')
          error1="Login failed"
      }     
})


//when click logout its returning 
router.get('/logout',(req,res,next)=>{
   req.session.user=false;
   res.redirect('/');
})



module.exports = router;
