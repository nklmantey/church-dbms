import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

//routes
import financeRoutes from './routes/finance.js';
import inventoryRoutes from './routes/inventory.js';
import attendanceRoutes from './routes/attendance.js';
import membersRoutes from './routes/members.js';
import scheduleRoutes from './routes/schedule.js';
import usersRoutes from './routes/users.js';

const app = express();

app.use('/finance', financeRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/members', membersRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/users', usersRoutes);

app.use(bodyParser.json({ limit: "30mb, extended: true" }));
app.use(bodyParser.urlencoded({ limit: "30mb, extended: true" }));
app.use(cors());

//mongo db setup
const CONNECTION_URL = 'mongodb+srv://mantey:mantey123@church-dbms.wuybcco.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server listening on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
