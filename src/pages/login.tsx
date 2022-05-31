import { NextPage } from 'next';

const Login: NextPage = () => (
  <div className="flex w-screen h-screen justify-center items-center">
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <form>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
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
            />
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
