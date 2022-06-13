import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import { ReactElement } from 'react';

import SignInForm from '@modules/auth/components/SignInForm';
import RouteConstant from '@consts/route';
import { useAuthContext } from '@modules/auth/authProvider';

const Login = (): ReactElement => {
  const { isLoginProcess } = useAuthContext();

  if (isLoginProcess) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <progress className="progress w-56" />
      </div>
    );
  }

  return (
    <>
      <Link href={RouteConstant.Home}>
        <button type="button" className="btn btn-link">
          <BsArrowLeft className="mr-2" />
          Go Back
        </button>
      </Link>
      <SignInForm />
    </>
  );
};

export default Login;

Login.getLayout = function getLayout(page: ReactElement): ReactElement {
  return page;
};
