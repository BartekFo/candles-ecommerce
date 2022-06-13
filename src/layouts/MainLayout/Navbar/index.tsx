import Link from 'next/link';

import RouteConstant from '@consts/route';
import { useAuthContext } from '@modules/auth/authProvider';
import ProfileAvatar from '@layouts/MainLayout/Navbar/components/ProfileAvatar';
import ShoppingCart from '@layouts/MainLayout/Navbar/components/ShoppingCart';

const Navbar = (): JSX.Element => {
  const { user } = useAuthContext();

  return (
    <div className="navbar bg-base-100 drop-shadow-xl">
      <div className="flex-1">
        <Link href={RouteConstant.Home}>
          <a className="btn btn-ghost normal-case text-xl">Candles Ecommerce</a>
        </Link>
      </div>
      <div className="flex-none">
        <ShoppingCart />
        <div className="dropdown dropdown-end">
          <ProfileAvatar />
          {!user && (
            <Link href={RouteConstant.Login}>
              <a type="button" className="btn btn-ghost">
                Sign In
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
