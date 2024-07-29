import { Router } from 'express';
import { authMiddleware } from '../middleware';
import { SignInSchema, SignUpSchema } from '../types';
import { prismaClient } from '../db';
import jwt from 'jsonwebtoken'
import { JWT_PASSWORD } from '../config';

const router = Router();

router.post('/signup', async (req, res) => {
    console.log("hi from signup");
    const body = req.body;
    console.log('body', body);
    const parsedData = SignUpSchema.safeParse(body);

    if (!parsedData.success) {
        console.log('parsedData.success', parsedData.success);
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const userExists = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username
        }
    });

    if (userExists) {
        return res.status(403).json({
            message: "User already exists"
        })
    }

    await prismaClient.user.create({
        data: {
            email: parsedData.data.username,
            password: parsedData.data.password,
            name: parsedData.data.name
        }
    })

    return res.json({
        message: "Please verify your account by checking your email"
    });
});

router.post('/signin', async (req, res) => {
    console.log('Signin handler');
    const body = req.body;
    const parsedData = SignInSchema.safeParse(body);

    if (!parsedData.success) {
        console.log(parsedData.error);
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
            password: parsedData.data.password
        }
    });

    if (!user) {
        res.status(403).json({
            message: "The credentials are incorrect!"
        })
    }

    const token = jwt.sign({
        id: user?.id,
    }, JWT_PASSWORD)

    res.json({
        token: token
    })
});

router.get('/', authMiddleware, async (req, res) => {
    console.log('User handler');
    //@ts-ignore
    const id = req.id;
    const user = await prismaClient.user.findFirst({
        where: {
            id: id
        },
        select: {
            name: true,
            email: true
        }
    })

    return res.json({
        user
    })
})


export const userRouter = router;