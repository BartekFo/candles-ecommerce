import * as z from 'zod';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type SignInFieldValues = z.infer<typeof signInSchema>;

export const defaultValues: SignInFieldValues = {
  email: '',
  password: '',
};

export default signInSchema;
