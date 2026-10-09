const BASE_URL = "https://api.adviceslip.com";

export const getAdvice = async () => {
  const response = await fetch(`${BASE_URL}/advice`);
  if (!response.ok) {
    throw new Error("Failed to fetch advice from server.");
  }
  const data = await response.json();
  return data.slip.advice; // Returns pure data string
};
