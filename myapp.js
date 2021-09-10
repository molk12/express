const express=require('express')
const app=express()


 
const date=new Date ()





// middleware
const logger=(req,res,next)=>{
  if ((date.getDay()==0) || (date.getDay()==6) ||(date.getHours()>=17)||(date.getHours()<9))
  res.send("<h1> we are not available</h1>")
  // console.log(date.getHours())
  next()
}
app.use(logger)

app.use(express.static('App/images'))



// app.get('/',logger,(req,res)=>{
//   res.sendFile(__dirname+"/App/index.html")
// })
// //////////// link css:
// app.get('/style.css',(req,res)=>{
// res.sendFile(__dirname+'/App/style.css')
// })

// app.get('/service',logger,(req,res)=>{
//   res.sendFile(__dirname+"/App/service.html")
// })

// app.get('/contact',logger,(req,res)=>{
//   res.sendFile(__dirname+"/App/contact-us.html")
// })

const port=5000

app.listen(port,()=>{     
  console.log(`server running ${port}`)

})