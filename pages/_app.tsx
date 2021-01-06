import React from 'react';
import { AppContext, AppInitialProps } from 'next/app';
import { HeadlessProvider } from '@wpengine/headless';

export default function App({
    Component, 
    pageProps,
}: AppContext & AppInitialProps) {
    return (
     <HeadlessProvider pageProps={pageProps}>
        <Component {...pageProps} />
     </HeadlessProvider>
   );
}
