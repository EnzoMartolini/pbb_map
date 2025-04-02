async function getCoordinates(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.length > 0) {
        const { lat, lon } = data[0];
        console.log(lon, lat)
        return { lat, lon };
      } else {
        console.log("Adresse non trouvée !");
        return null;
      }
    } catch (error) {
      console.error("Erreur lors du géocodage:", error);
      return null;
    }
  }
  
  export default getCoordinates
  