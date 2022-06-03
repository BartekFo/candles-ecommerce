import '../styles/globals.css';
import type { AppProps } from 'next/app';

import AuthProvider from '@contextProviders/authProvider';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
);

export default MyApp;
