import 'normalize.css';

import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import React from 'react';

import { StoreProvider } from '@/hooks/useStore';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <StoreProvider {...pageProps}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                </Hydrate>
            </StoreProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
