import express from 'express';
import { PrismaClient } from '@prisma/client'
const app = express();
const PORT = 3000;
const client = new PrismaClient()

app.use(express.json());

app.get('/hooks/catch/:userId/:zapId', async (req, res) => {

    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    await client.$transaction(async tx => {
        const run = await tx.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body
            }
        });;

        await tx.zapRunOutbox.create({
            data: {
                zapRunId: run.id
            }
        })
    })
    res.json({
        message: "Webhook received"
    })
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
});