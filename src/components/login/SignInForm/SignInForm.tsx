import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { GoogleIcon } from '@assets/icons';
import signInFormSchema, {
  SignInFieldValues,
  defaultValues,
} from '@components/login/SignInForm/signInFormSchema';

const SignInForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFieldValues>({
    defaultValues,
    resolver: zodResolver(signInFormSchema),
  });
  const onSubmit: SubmitHandler<SignInFieldValues> = (data) => console.log(data);

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                {...register('email')}
              />
              <p className="text-error">{errors.email?.message}</p>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="email">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
                {...register('password')}
              />
              <p className="text-error">{errors.password?.message}</p>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-5">
              Sign in
            </button>
          </form>
          <div className="divider" />
          <div className="prose">
            <p className="mb-1">You don&apos;t have account yet?</p>
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </div>
          <div className="divider">OR</div>
          <button type="button" className="btn">
            <div className="mr-3">
              <GoogleIcon />
            </div>
            Sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
