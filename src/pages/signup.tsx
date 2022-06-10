import { NextPage } from 'next';
import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';

import SignUpForm from '@modules/auth/components/SignUpForm';
import RouteConstant from '@consts/route';

const SignUp: NextPage = () => (
  <>
    <Link href={RouteConstant.Home}>
      <button type="button" className="btn btn-link">
        <BsArrowLeft className="mr-2" />
        Go Back
      </button>
    </Link>
    <SignUpForm />
  </>
);

export default SignUp;
