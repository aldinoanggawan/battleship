import { AppProps } from 'next/app';
import { globalStyles } from '../shared/styles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

export default App;
