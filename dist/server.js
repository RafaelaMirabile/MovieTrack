import express from 'express';
import cors from 'cors';
import 'dotenv/config';
var server = express();
server.use(cors());
server.listen(process.env.PORT || 5000, function () {
    console.log("Server listening on port ".concat(process.env.PORT));
});
