import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

const createTimer = () => {
    const startTime = Date.now();
    return () => Math.round((Date.now() - startTime) / 1000);
};

function Timer() {
    const timerRef = useRef(createTimer());
    const { data } = useQuery(['time'], timerRef.current, {
        refetchInterval: 100,
    });

    return <div>Seconds: {data} </div>;
}

export default Timer;
