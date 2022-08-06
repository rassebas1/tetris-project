import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number) {
    const savedCallback = useRef<null | (() => void)>(null);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick(): void {
            if (savedCallback.current) savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

