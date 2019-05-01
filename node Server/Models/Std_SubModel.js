let mongoose = require("mongoose")

const std_subSchema = new mongoose.Schema({
    StudentId:{type:Number, ref:'Students'},
    SubjectId:{type:Number, ref:'Subjects'},
    grade:{type:Number, min:0, max:100}
})

std_subSchema.index({ StudentId: 1, SubjectId: 1 }, { unique: true })

//mapping
mongoose.model("Student_Subject",std_subSchema);

