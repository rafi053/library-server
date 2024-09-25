import express, { Application } from 'express';
import authRouter from "./routes/authRouter.js";
import booksRouter from './routes/booksRouter.js'
import dotenv from  'dotenv';


dotenv.config();
const PORT: number | string = process.env.PORT || 3000;

const app: Application = express();


const port:number = 3000;



app.use(express.json());
app.use('/',authRouter);
app.use('/books',booksRouter);






app.listen(port, ()=> {console.log(`server listen to port:  ${port}`);
});
