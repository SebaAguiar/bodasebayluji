import localFont from '@next/font/local';
import ReduxProvider from '@/redux/provider';
import '@/styles/globals.css';
import LoadingBar from 'react-top-loading-bar';
import type { AppProps } from 'next/app';
import PageLayout from '@/layouts/PageLayout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(20);
    });

    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    });
  }, [router.events]);

  return (
    <ReduxProvider>
      <PageLayout>
        <LoadingBar
          color='#DEB2B1'
          shadow={true}
          height={4}
          progress={progress}
          waitingTime={1000}
          onLoaderFinished={() => setProgress(0)}
        />
        <Component {...pageProps} />
      </PageLayout>
    </ReduxProvider>
  );
}
