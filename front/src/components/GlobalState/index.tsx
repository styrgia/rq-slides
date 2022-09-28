import { Space, Text, TextInput } from '@mantine/core';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function useGlobalState<T>(
    key: string,
    initialData: T
): [T, (value: T) => T | undefined] {
    const client = useQueryClient();
    return [
        useQuery([key], () => initialData, {
            enabled: false,
            initialData,
        }).data,
        (value: T) => client.setQueryData([key], value),
    ];
}

function StateEditor() {
    const [value, setValue] = useGlobalState('sharedText', '');
    return <TextInput value={value} onChange={event => setValue(event.target.value)} />;
}

function StateViewer() {
    const [value] = useGlobalState('sharedText', '');
    return <Text>{value}</Text>;
}

function GlobalState() {
    return (
        <div>
            <StateEditor />
            <Space h="xl" />
            <StateViewer />
        </div>
    );
}

export default GlobalState;
