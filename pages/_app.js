import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Footer from '@/components/Footer';
import { Dosis } from 'next/font/google';

const roboto = Dosis({
  subsets: ['latin'],
  weight: '300',
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={roboto.className}>
        {' '}
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
