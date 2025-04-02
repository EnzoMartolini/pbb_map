import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

function Map() {

    const mapRef = useRef(null);
    useEffect(() => {
    
        if (mapRef.current) return;
    
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;
    
        mapRef.current = L.map('map').setView([46.603354, 1.888334], 5);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapRef.current);
    }, []);
  return (
    <>
        <p>Carte de la France avec des points</p>
        <div id='map' style={{ height: '500px', width: '500px' }}></div>
    </>
  );
}

export default Map;