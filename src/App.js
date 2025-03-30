import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import CategoryList from "./components/CategoryList";
import FilterSort from "./components/FilterSort";
import AddTask from "./components/AddTask";

const ETAT = {
    NOUVEAU: "Nouveau",
    EN_COURS: "En cours",
    REUSSI: "Réussi",
    EN_ATTENTE: "En attente",
    ABANDONNE: "Abandonné",
    TERMINE: "Terminé"
};

function App() {
    const [taches, setTaches] = useState([
        { intitulé: "Faire la vaisselle", dateCreation: "2025-03-01", dateEcheance: "2025-04-01", etat: ETAT.NOUVEAU, urgent: false, categorie: "Personnelle" },
        { intitulé: "Rendre le projet", dateCreation: "2025-03-05", dateEcheance: "2025-03-30", etat: ETAT.EN_COURS, urgent: true, categorie: "Professionnelle" }
    ]);

    const [categories, setCategories] = useState([
        { intitulé: "Personnelle", couleur: "#FF5733", emoji: "🏠", actif: true },
        { intitulé: "Professionnelle", couleur: "#33FF57", emoji: "📅", actif: true }
    ]);

    const [filteredTaches, setFilteredTaches] = useState(taches);
    const [vue, setVue] = useState("taches");

    const addTache = (newTache) => {
        const updatedTaches = [...taches, newTache];
        setTaches(updatedTaches); // Met à jour l'état des tâches
        setFilteredTaches(updatedTaches); // Met à jour les tâches filtrées pour refléter immédiatement la nouvelle tâche
    };

    const deleteTache = (index) => {
        const updatedTaches = taches.filter((_, i) => i !== index);
        setTaches(updatedTaches);
        setFilteredTaches(updatedTaches); // Met à jour les tâches filtrées après suppression
    };

    const toggleVue = () => {
        setVue(vue === "taches" ? "categories" : "taches");
    };

    // Calcul du nombre total de tâches
    const totalTaches = taches.length;

    // Calcul du nombre de tâches non terminées
    const tachesNonTerminees = taches.filter((tache) => tache.etat !== ETAT.TERMINE).length;

    return (
        <div className="todo-container">
            <Header vue={vue} totalTaches={totalTaches} tachesNonTerminees={tachesNonTerminees} />
            <main>
                {vue === "taches" ? (
                    <div>
                        <FilterSort taches={taches} categories={categories} setFilteredTaches={setFilteredTaches} />
                        <TodoList taches={filteredTaches} deleteTache={deleteTache}/>
                        <AddTask addTache={addTache} categories={categories} />
                    </div>
                ) : (
                    <CategoryList categories={categories} setCategories={setCategories} />
                )}
            </main>
            <Footer toggleVue={toggleVue} vue={vue}/>
        </div>
    );
}

export default App;
