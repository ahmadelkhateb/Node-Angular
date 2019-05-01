let mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    _id:Number,
    Name:String,
    Email:String,
});



//mapping
mongoose.model("Students",studentSchema);