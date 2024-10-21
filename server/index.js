import  express from "express";

const app = express();
const PORT = 5000;

app.get("/",(req, res) =>{
    res.status(200).json({
        message: "hello world"
    });
} );

//route/path
app.use("x", (req, res) =>{
    req.statusCode(404).json({
        message:"not found"
    });
});

//start the server
app.listen(PORT,() => {
    console.log(`server listening on port ${PORT}`);
});