import 'normalize.css';
import '@/assets/styles/index.sass';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import React from 'react';
import { StoreProvider } from '@/hooks/useStore';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <StoreProvider {...pageProps}>
                <Hydrate state={pageProps.dehydratedState}>
                    <MantineProvider
                        withGlobalStyles
                        withNormalizeCSS
                        theme={{ colorScheme: 'dark' }}
                    >
                        <Component {...pageProps} />
                    </MantineProvider>
                </Hydrate>
            </StoreProvider>
            <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
    );
}
