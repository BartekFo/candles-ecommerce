import * as z from 'zod';

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type LoginFormDefaultValues = z.infer<typeof LoginFormSchema>;

export const defaultValues: LoginFormDefaultValues = {
  email: '',
  password: '',
};

export default LoginFormSchema;
