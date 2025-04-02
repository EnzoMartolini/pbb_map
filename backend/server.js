import express, { json } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Autoriser les requêtes CORS
app.use(json()); // Permettre le JSON dans les requêtes

// Route test
app.get("/", (req, res) => {
  res.send("🚀 Serveur Express opérationnel !");
});

// Route API pour envoyer des marqueurs
app.get("/api/markers", (req, res) => {
  const markers = [
    { id: 1, name: "Paris", coords: [48.8566, 2.3522] },
    { id: 2, name: "Lyon", coords: [45.764, 4.8357] },
    { id: 3, name: "Toulouse", coords: [43.6047, 1.4442] },
    { id: 4, name: "Marseille", coords: [43.2965, 5.3698] }
  ];
  res.json(markers);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
