import { useState, useEffect } from "react";

export function useFetch<T>(url: string, ms?: number) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let controller = new AbortController();

        const fetchData = async (isFirstLoad: boolean) => {
            if (isFirstLoad) setLoading(true);
            
            try {
                const response = await fetch(url, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                setError(null); 
            } catch (err: any) {
                if (err.name !== "AbortError") {
                    setError(err.message || "An error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData(true);

        let intervalId: number | undefined;
        if (ms) {
            intervalId = window.setInterval(() => {
                fetchData(false);
            }, ms);
        }

        return () => {
            controller.abort();
            if (intervalId) clearInterval(intervalId);
        };
    }, [url, ms]); 

    return { data, loading, error };
}