import localFont from '@next/font/local';
import ReduxProvider from '@/redux/provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const palmaton = localFont({
  src: '../../public/fonts/Palmaton.ttf',
  variable: '--font-palmaton',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </>
  );
}
