let express=require("express"),
SubjectRouter=express.Router(),
path=require("path"),
mongoose=require("mongoose");


// SubjectRouter.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  

require("../Models/SubjectModel")
let subjectSchema=mongoose.model("Subjects");

require("../Models/Std_SubModel");
let std_subSchema=mongoose.model("Student_Subject");

SubjectRouter.delete("/delete/:id",(request,response)=>{
    subjectSchema.deleteOne({_id:request.params.id},(error)=>{
        if(!error){
            std_subSchema.deleteMany({SubjectId:request.params.id},(err)=>{
                if(!err){
                    response.send({data:"deleted"})
                }
            })
        }
        else
            response.send(error)
    })
});

SubjectRouter.put("/edit/:id",(request,response)=>{
  
    subjectSchema.update({_id:request.params.id},{
        "$set":{
            Name:request.body.Name    
        }
    },(error)=>{
        if(!error)
        {
            subjectSchema.findOne({_id:request.params.id},(err,result)=>{
               if(!err)
                response.send(result);
                else
                response.send(err)
            });
        }
        else
        {
            response.send(error)
        }
    })
})
SubjectRouter.post("/add",(request,response)=>{
    let subject=new subjectSchema({
        _id:request.body._id,
        Name:request.body.Name,
      
    });
    subject.save((error)=>{
        if(!error)
        {     
            subjectSchema.findOne({_id:request.body._id},(error,result)=>{
                response.send(result);
            });
        }
        else
            response.send(error);
    });
})

SubjectRouter.get("/list",(request,response)=>{
    subjectSchema.find({},(error,result)=>{
        response.send(result);
    });

})

module.exports=SubjectRouter;