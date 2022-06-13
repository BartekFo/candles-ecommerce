import Image from 'next/image';

import { useAuthContext } from '@modules/auth/authProvider';

const ProfileAvatar = (): JSX.Element | null => {
  const {
    user,
    actions: { signOut },
  } = useAuthContext();

  if (!user) {
    return null;
  }

  return (
    <>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user?.photoURL && <Image className="rounded-full" layout="fill" src={user.photoURL} />}
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <button onClick={signOut} type="button" className="btn btn-ghost">
            Logout
          </button>
        </li>
      </ul>
    </>
  );
};

export default ProfileAvatar;
