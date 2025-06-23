const apiUrl = import.meta.env.VITE_API_URL;

export const createTeam = async (teamData) => {
  const res = await fetch(`${apiUrl}/team`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(teamData),
  });
  if (!res.ok) throw new Error("Failed to create team");
  const data = await res.json();
  return data.id;
};

export const createSportEvent = async (eventData) => {
  const res = await fetch(`${apiUrl}/sportevent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });
  if (!res.ok) throw new Error("Failed to create sport event");
  return res.json();
};

export const deleteSportEvent = async (externalId) => {
  const res = await fetch(`${apiUrl}/sportevent/${externalId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete sport event");
};
