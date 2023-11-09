import {userNameRegex} from '@constants';
import {z} from 'zod';

export type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

export const signUpScreenSchema = z.object({
  username: z.string().regex(userNameRegex, 'username inválido').toLowerCase(),
  fullName: z
    .string()
    .min(5, 'username muito curto')
    .max(50, 'username muito longo')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
  email: z.string().email('e-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpScreenSchema>;
