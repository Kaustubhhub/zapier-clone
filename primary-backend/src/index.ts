import express from 'express'
import { userRouter } from './router/user';
import { zapRouter } from './router/zap';
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/zap', zapRouter);

app.listen(3001, () => {
    console.log(`primary backend is running on port 3001`)
})