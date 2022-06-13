import '../styles/globals.css';
import type { AppProps as NextAppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

import MainLayout from '@layouts/MainLayout';

import AuthProvider from '../modules/auth/authProvider';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppProps = NextAppProps & {
  Component: NextPageWithLayout;
};
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const getLayout = Component.getLayout ?? ((page): JSX.Element => <MainLayout>{page}</MainLayout>);

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
};

export default MyApp;
