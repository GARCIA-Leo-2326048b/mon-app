import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import CategoryList from "./components/CategoryList";
import FilterSort from "./components/FilterSort";

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
        { intitulé: "Tâche 1", dateCreation: "2025-03-01", dateEcheance: "2025-04-01", etat: ETAT.NOUVEAU, urgent: false, categorie: "Catégorie 1" },
        { intitulé: "Tâche 2", dateCreation: "2025-03-05", dateEcheance: "2025-03-30", etat: ETAT.EN_COURS, urgent: true, categorie: "Catégorie 2" },
        { intitulé: "Tâche 3", dateCreation: "2025-03-10", dateEcheance: "2025-05-01", etat: ETAT.TERMINE, urgent: false, categorie: "Catégorie 1" }
    ]);

    const [categories, setCategories] = useState([
        { intitulé: "Catégorie 1", couleur: "#FF5733", emoji: "📅", actif: true },
        { intitulé: "Catégorie 2", couleur: "#33FF57", emoji: "🏠", actif: true }
    ]);

    const [filteredTaches, setFilteredTaches] = useState(taches);
    const [vue, setVue] = useState("taches");

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
                        <TodoList taches={filteredTaches} setTaches={setTaches}/>
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
