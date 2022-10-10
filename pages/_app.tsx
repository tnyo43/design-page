import type { AppProps } from 'next/app';
import '../src/styles/colors.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
