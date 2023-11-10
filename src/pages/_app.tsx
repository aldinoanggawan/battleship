import { AppProps } from 'next/app';
import Head from 'next/head';
import { globalStyles } from '../shared/styles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Battleship</title>
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

export default App;
