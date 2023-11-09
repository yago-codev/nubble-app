import {z} from 'zod';

export type ForgotPasswordFormType = {
  email: string;
};

export const forgotPasswordScreenSchema = z.object({
  email: z.string().email('e-mail inválido'),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordScreenSchema>;
