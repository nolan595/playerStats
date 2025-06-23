const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchOfferData = async (params = {}) => {
  const url = new URL(`${BASE_URL}/superbet-api/offer/sports-events`);

  // Add query params
  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined && params[key] !== null) {
      url.searchParams.append(key, params[key]);
    }
  });

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch offer data: ${res.status} ${res.statusText}`
    );
  }

  const json = await res.json();

  // Adjust depending on API shape
  return json.records || json;
};
