import { useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export const useSelectedSportEvents = () => {
  const [selectedEvents, setSelectedEvents] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSelectedEvents() {
      try {
        const response = await fetch(`${apiUrl}/sportevent`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        const ids = new Set(data.map((event) => event.externalId));
        setSelectedEvents(ids);
      } catch (err) {
        console.error("Failed to load selected events:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSelectedEvents();
  }, []);

  return { selectedEvents, setSelectedEvents, loading, error };
};
