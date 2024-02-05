import localFont from '@next/font/local';
import ReduxProvider from '@/redux/provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import PageLayout from '@/layouts/PageLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ReduxProvider>
  );
}
