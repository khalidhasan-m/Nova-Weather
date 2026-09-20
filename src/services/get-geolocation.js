export const getGeolocation = async (city) => {
  //   console.log("City : ", city);
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    city,
  )}&count=1&language=en&format=json`;
  const result = await fetch(url);
  //   console.log(await result.json());
  if (!result.ok) {
    throw new Error("Geocoding request failed! Please try again.");
  }
  const data = await result.json();
  if (!data.results || data.results.length === 0) {
    throw new Error(`We couldn't find "${city}". Try another city name.`);
  }
  const place = data.results[0];
  //   console.log(place);
  return {
    name: place.name,
    lat: place.latitude,
    lon: place.longitude,
  };
};
