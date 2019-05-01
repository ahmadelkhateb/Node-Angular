let express=require("express"),
    cors=require("cors"),
    morgan=require("morgan"),
    path=require("path"),
    bodyParser=require("body-parser"),
    express_session=require("express-session"),
    connect_flash=require("connect-flash"),
    cookie_parser=require("cookie-parser"),
    mongoose=require("mongoose");
    // express_ejs_layouts=require("express-ejs-layouts"),
    mongoose.connect("mongodb://localhost:27017/taskDB", {useNewUrlParser: true });
    mongoose.set('useCreateIndex', true);
    //Routes
    StudentRouter=require("./Routers/StudentsRouter"),
    SubjectRouter=require("./Routers/SubjectsRouter"),
    StudentSubjectRouter=require("./Routers/Std_SubRouter");
//open server
let server=express();

server.use(cors({origin:true}));



/********************* Routings */
server.set("view engine","ejs");
server.set("views",path.join(__dirname,"views"));
server.use(express.static(path.join(__dirname,"publics")));
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());



server.use(/\//,(request,response)=>{
    // response.send("HOME");
    // response.sendFile(path.join(__dirname,"views","home.html"));
    response.render("home");
});



server.use("/Students",StudentRouter);
server.use("/Subjects",SubjectRouter);
server.use("/StudentSubs",StudentSubjectRouter);
server.use((request,response)=>{
    response.send("Not Found");
});


server.listen(8080,()=>{
    console.log("I am Listening ......");
});
