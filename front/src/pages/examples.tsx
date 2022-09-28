import Timer from '@/components/Timer';
import GlobalState from '@/components/GlobalState';
import React from 'react';
import { Space, Stack, Text } from '@mantine/core';

function ExamplesPage() {
    return (
        <Stack>
            <Text>Таймер:</Text>
            <Timer />

            <Space h="xl" />

            <Text>Глобальное состояние:</Text>
            <GlobalState />

            <Space h="xl" />
        </Stack>
    );
}

export default ExamplesPage;
