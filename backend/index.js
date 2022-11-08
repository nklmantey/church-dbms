import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

//routes
import financeRoutes from './routes/finance.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb, extended: true" }));
app.use(bodyParser.urlencoded({ limit: "30mb, extended: true" }));
app.use(cors());

app.use('/finance', financeRoutes);

//mongo db setup
const CONNECTION_URL = 'mongodb+srv://mantey:mantey123@church-dbms.wuybcco.mongodb.net/?retryWrites=true&w=majority';
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server listening on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
