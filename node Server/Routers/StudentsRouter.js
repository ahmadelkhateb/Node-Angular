let express=require("express"),

StudentRouter=express.Router(),

path=require("path"),
mongoose=require("mongoose");

require("../Models/StudentModel");
let studentSchema=mongoose.model("Students");

require("../Models/Std_SubModel");
let std_subSchema=mongoose.model("Student_Subject");

StudentRouter.get("/list",(request,response)=>{ 
    studentSchema.find({},(error,result)=>{
       response.send(result);
    });
})

StudentRouter.post("/add",(request,response)=>{
   console.log("request");
   console.log(request.body)
 
    let student=new studentSchema({
        _id:request.body._id,
        Name:request.body.Name,
        Email:request.body.Email,
    });

    student.save((err)=>{
        if(!err)
        {
            studentSchema.findOne({_id:request.body._id},(error,result)=>{
                if(!error)
                response.send(result)
                else
                response.send(error)
                })
        }
        else
        {
           response.send(err);
        }
    })

})
StudentRouter.get("/details/:id",(request,response)=>{

    studentSchema.findOne({_id:request.params.id},(error,result)=>{
        if(!error)
            response.send(result)
        else
            response.send(error);
    });
})
StudentRouter.put("/edit/:id",(request,response)=>{
  

    studentSchema.update({_id:request.params.id},{
        "$set":{
            Name:request.body.Name,
            Email:request.body.Email
        }
    },(error)=>{
        if(!error)
        {
            studentSchema.findOne({_id:request.params.id},(err,result)=>{
                if(!err)
                response.send(result)
                else
                response.send(err);
            })
        }
        else
        {
            response.send(error)
        }
    })


})
StudentRouter.delete("/delete/:id",(request,response)=>{
    studentSchema.deleteOne({_id:request.params.id},(error)=>{
        if(!error)
            std_subSchema.deleteMany({StudentId:request.params.id},(err)=>{
                if(!err){
                    response.send({data:"deleted"})
                }
            })
        else
            response.send(error);
    })
});
module.exports=StudentRouter;