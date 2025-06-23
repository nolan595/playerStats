import { useState, useEffect } from "react";
import { fetchOfferData } from "../services/offerApi";

const useOfferData = (params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchOfferData(params);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [JSON.stringify(params)]);

  return { data, loading, error };
};

export default useOfferData;
