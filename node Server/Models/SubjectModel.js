let mongoose=require("mongoose");

const subjectSchema=new mongoose.Schema({
    _id:Number,
    Name:String, 
});

//mapping
mongoose.model("Subjects",subjectSchema);
