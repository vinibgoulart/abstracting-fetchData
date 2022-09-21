import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [response, setResponse] = useState<T>();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setResponse(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [url]);

  return { response };
};
