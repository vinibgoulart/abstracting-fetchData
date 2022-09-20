import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [response, setResponse] = useState<T>();

  useEffect(() => {
    const fetchData = () => {
      new Promise(async (resolved, rejected) => {
        const res = await fetch(url);
        const data = await res.json();
  
        setResponse(data);
      }).catch(err => alert(err))
    };

    fetchData();
  }, [url]);

  return { response };
};
