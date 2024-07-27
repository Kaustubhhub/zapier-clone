
import { PrismaClient } from '@prisma/client'
import { Kafka } from 'kafkajs'
const client = new PrismaClient();
const kafka = new Kafka({
    clientId: "outbox-processor",
    brokers: ["localhost:9092"]
})

const TOPIC_NAME = 'zap-events';

async function main() {
    const producer = kafka.producer();
    try {
        await producer.connect();
    } catch (err) {
        console.log('err', err);
    }

    while (1) {
        const pendingRows = await client.zapRunOutbox.findMany({
            where: {},
            take: 10,
        })

        pendingRows.forEach(r => {
            producer.send({
                topic: TOPIC_NAME,
                messages: pendingRows.map(r => ({
                    value: r.zapRunId
                }))
            })
        })

        await client.zapRunOutbox.deleteMany({
            where: {
                id: {
                    in: pendingRows.map(r => r.id)
                }
            }
        })
    }
}

main()
