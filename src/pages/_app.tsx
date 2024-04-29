import React from 'react';
import {AppProps} from 'next/app';
import {ProgressProvider} from "@/contexts/ProgressContext";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ProgressProvider>
            <Component {...pageProps} />
        </ProgressProvider>
    );
}

export default MyApp;
