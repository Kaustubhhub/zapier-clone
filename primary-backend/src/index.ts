import express from 'express'
import { userRouter } from './router/user';
import { zapRouter } from './router/zap';
import cors from 'cors'
import { actionRouter } from './router/action';
import { triggerRouter } from './router/trigger';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/zap', zapRouter);
app.use('/api/v1/trigger', triggerRouter);
app.use('/api/v1/action', actionRouter);

app.listen(3000, () => {
    console.log(`primary backend is running on port 3000`)
})