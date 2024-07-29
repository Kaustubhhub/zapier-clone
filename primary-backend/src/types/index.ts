import { z } from 'zod';

export const SignUpSchema = z.object({
    username: z.string().min(6),
    password: z.string().min(6),
    name: z.string().min(5)
})

export const SignInSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const ZapCreateSchema = z.object({
    availableTriggerId: z.string(),
    triggerMetadata: z.any().optional(),
    actions: z.array(z.object({
        availableActionId: z.string(),
        actionMetadata: z.any().optional(),
    }))
});