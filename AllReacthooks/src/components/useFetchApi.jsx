import React, { useDebugValue, useEffect, useState } from "react";

const useFetchApi = (url = "", options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, options]);

  useDebugValue("API Fetcher");

  return { loading, error, data };
};

export default useFetchApi;
