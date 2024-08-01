import { Router } from "express";
import { prismaClient } from "../db";

const router = Router();

router.get('/available', async (req, res) => {
    const availableTriggers = await prismaClient.availableTrigger.findMany({})
    console.log('availableTriggers', availableTriggers);
    return res.json({
        availableTriggers
    })
})

export const triggerRouter = router;