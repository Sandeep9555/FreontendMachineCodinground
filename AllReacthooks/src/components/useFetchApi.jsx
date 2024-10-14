import React, { useEffect, useState } from "react";

const useFetchApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading();
    fetch(url, options).then((data) => {
      setData(data);
      setError(null);
    });
  });
  return <div>useFetchApi</div>;
};

export default useFetchApi;
