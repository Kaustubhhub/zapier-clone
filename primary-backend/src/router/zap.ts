import { Router } from 'express';
import { authMiddleware } from '../middleware';

const router = Router();

router.post('/', authMiddleware, (req, res) => {
    console.log('create a zap');
})

router.get('/', authMiddleware, (req, res) => {
    console.log('get the zaps');
})

router.get('/:zapId', authMiddleware, (req, res) => {
    console.log('get the zapId');
})


export const zapRouter = router;