import {z} from 'zod';

export type LoginFormType = {
  email: string;
  password: string;
};

export const loginScreenSchema = z.object({
  email: z.string().email('e-mail inválido'),
  password: z.string().min(8, 'senha obrigatória'),
});

export type LoginSchema = z.infer<typeof loginScreenSchema>;
