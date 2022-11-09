import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const server = express();
server.use(cors());

server.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
})