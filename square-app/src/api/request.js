const baseUrl = "https://60816d9073292b0017cdd833.mockapi.io/modes";

const performRequest = async ({ method, url }) => {
  const response = await fetch(url, { method })
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return await response.json();
}

export const getModesCollection = async () => {
  return await performRequest(
    { 
      method: "GET", 
      url: baseUrl,
    }
  );
}
