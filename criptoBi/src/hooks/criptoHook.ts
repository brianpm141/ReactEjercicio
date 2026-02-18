import { useState, useEffect } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal });

                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.status}`);
                }

                const result = await response.json();
                setData(result);

            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => controller.abort();

    }, [url]);

    return { data, loading, error };
}