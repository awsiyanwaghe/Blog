import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js"
import userRoute from "./routes/user.route.js"
import blogRoute from "./routes/blog.route.js"
import commentRoute from "./routes/comment.route.js"
import cookieParser from 'cookie-parser';
import axios from "axios"
import cron from 'node-cron'
import cors from 'cors'
// import path from "path"

dotenv.config()
const app = express()

// const PORT = process.env.PORT || 3000
const PORT = 8000


// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: ["http://localhost:5173", "*" , "https://blog-1-b8t3.onrender.com"],
    credentials:true
}))

// const _dirname = path.resolve()

app.get('/',(req,res)=>{
    res.send('hello world')
})

// apis

 app.use("/api/v1/user", userRoute)
 app.use("/api/v1/blog", blogRoute)
 app.use("/api/v1/comment", commentRoute)

//  app.use(express.static(path.join(_dirname,"/frontend/dist")));
//  app.get("*", (_, res)=>{
//     res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
//  });


cron.schedule('*/1 * * * *', async () => {
    try {
        const response = await axios.get(`${ 'https://blog-hdnp.onrender.com' || `http://localhost:${PORT}`}/`, {
            family: 4  // Force IPv4
        });
        console.log('Pinged the server:', response.data);
    } catch (error) {
        console.error('Error pinging the server:', error.message);
    }
});



app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
    connectDB()
})
