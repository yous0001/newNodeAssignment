import  express  from "express"
import { config } from "dotenv";
import testrouter from './src/modules/test.routes.js';

config({path:"./config/.env"})



const app = express()
app.use(express.json())
app.use(testrouter)

app.listen(process.env.port,()=>{
    console.log(`server is running on port ${process.env.port}`);
})