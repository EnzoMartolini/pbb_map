import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';

function Map() {
    const mapRef = useRef(null);
    const markersRef = useRef([]);  // Référence pour suivre les marqueurs

    useEffect(() => {
        if (mapRef.current) return;

        // Création de la carte
        mapRef.current = L.map('map').setView([46.603354, 1.888334], 5);

        // Ajout d'un fond de carte
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapRef.current);

        // Écouter l'événement de clic sur la carte
        mapRef.current.on('click', (event) => {
            // Récupérer les coordonnées du clic
            const lat = event.latlng.lat;
            const lng = event.latlng.lng;

            // Supprimer les marqueurs précédents
            markersRef.current.forEach(marker => {
                mapRef.current.removeLayer(marker); // Supprimer le marqueur de la carte
            });
            markersRef.current = [];  // Réinitialiser la liste des marqueurs

            // Ajouter un nouveau marqueur
            const newMarker = L.marker([lat, lng]).addTo(mapRef.current)
                .bindPopup(`Latitude: ${lat}, Longitude: ${lng}`)
                .openPopup();

            // Ajouter le nouveau marqueur à la référence
            markersRef.current = [newMarker];

            // Afficher les coordonnées dans la console
            console.log(`Coordonnées cliquées : Latitude = ${lat}, Longitude = ${lng}`);
        });
    }, []);  // L'effet s'exécute une seule fois après le premier rendu

    return (
        <>
            <p>Carte de la France avec des points</p>
            <div id='map' style={{ height: '500px', width: '500px' }}></div>
        </>
    );
}

export default Map;
