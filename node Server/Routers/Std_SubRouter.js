let express=require("express"),

StudentSubjectRouter=express.Router(),

path=require("path"),
mongoose=require("mongoose");

require("../Models/Std_SubModel");
let std_subSchema=mongoose.model("Student_Subject");
require("../Models/StudentModel");
let studentSchema=mongoose.model("Students");

require("../Models/SubjectModel");
let subjectSchema=mongoose.model("Subjects");


  StudentSubjectRouter.post('/assign',(request,response)=>{
      let objs =[] 
      stdList = request.body.stdList
      subList = request.body.subList
      
      stdList.forEach((student)=>{
          subList.forEach((subject)=>{
            objs.push({StudentId:student,SubjectId:subject})
          })
      })
        std_subSchema.collection.insertMany(objs,{ ordered: false }, (error,result)=>{
            if(!error){
                response.send(result)
            }
            else
                response.send("Error" + error)
        })
      
  })

StudentSubjectRouter.get('/subjectStudents/:id', (request,response)=>{
    std_subSchema.find({SubjectId:request.params.id})
                .populate({path:"StudentId SubjectId"})
                .then((result)=>{
                    response.send(result);
                })
                .catch((error)=>response.send(result));
})

StudentSubjectRouter.get('/studentSubjects/:id', (request,response)=>{
    std_subSchema.find({StudentId:request.params.id})
                .populate({path:"StudentId SubjectId"})
                .then((result)=>{
                    response.send(result);
                })
                .catch((error)=>response.send(result));
})

StudentSubjectRouter.put("/grade/:stdid/:subid",(request,response)=>{
  

    std_subSchema.updateOne({StudentId:request.params.stdid,SubjectId:request.params.subid},{
        "$set":{
            grade:request.body.grade
        }
    },(error)=>{
        if(!error)
        {
            std_subSchema.findOne({StudentId:request.params.stdid,SubjectId:request.params.subid}
                ,(err,result)=>{
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
module.exports=StudentSubjectRouter;