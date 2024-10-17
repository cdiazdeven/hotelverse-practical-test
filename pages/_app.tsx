import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';

import { AppProvider } from '../src/context/AppContext';

import LoaderComponent from '../src/components/LoaderComponent';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppProvider>
            <LoaderComponent />            
            <Component {...pageProps} />
        </AppProvider>
    );
}
