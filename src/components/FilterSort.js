import React, { useState } from "react";

function FilterSort({ categories, taches, setFilteredTaches }) {
    const [selectedCategorie, setSelectedCategorie] = useState("");
    const [selectedEtat, setSelectedEtat] = useState("");
    const [urgent, setUrgent] = useState(false);
    const [isDone, setIsDone] = useState(null);
    const [sortBy, setSortBy] = useState("");

    // Fonction pour appliquer les filtres et trier
    const applyFiltersAndSort = () => {
        let filtered = [...taches];

        // Filtrer par catégorie
        if (selectedCategorie) {
            filtered = filtered.filter((tache) => tache.categorie === selectedCategorie);
        }

        // Filtrer par état
        if (selectedEtat) {
            filtered = filtered.filter((tache) => tache.etat === selectedEtat);
        }

        // Filtrer par urgence
        if (urgent) {
            filtered = filtered.filter((tache) => tache.urgent === true);
        }

        // Filtrer par état Fait/Pas fait
        if (isDone !== null) {
            filtered = filtered.filter((tache) => (isDone ? tache.etat === "Terminé" : tache.etat !== "Terminé"));
        }

        // Trier les tâches
        if (sortBy) {
            filtered.sort((a, b) => {
                if (sortBy === "dateCreation") {
                    return new Date(a.dateCreation) - new Date(b.dateCreation);
                } else if (sortBy === "dateEcheance") {
                    return new Date(a.dateEcheance) - new Date(b.dateEcheance);
                } else if (sortBy === "nom") {
                    return a.intitulé.localeCompare(b.intitulé);
                }
                return 0;
            });
        }

        // Mettre à jour les tâches filtrées
        setFilteredTaches(filtered);
    };

    return (
        <div className="filter-sort">
            <h3>Filtrer les Tâches</h3>

            {/* Filtre par catégorie */}
            <div className="filter">
                <label>Catégorie :</label>
                <select value={selectedCategorie} onChange={(e) => setSelectedCategorie(e.target.value)}>
                    <option value="">Toutes les catégories</option>
                    {categories.map((categorie, index) => (
                        <option key={index} value={categorie.intitulé}>
                            {categorie.intitulé}
                        </option>
                    ))}
                </select>
            </div>

            {/* Filtre par état */}
            <div className="filter">
                <label>Etat :</label>
                <select value={selectedEtat} onChange={(e) => setSelectedEtat(e.target.value)}>
                    <option value="">Tous les états</option>
                    <option value="Nouveau">Nouveau</option>
                    <option value="En cours">En cours</option>
                    <option value="Réussi">Réussi</option>
                    <option value="En attente">En attente</option>
                    <option value="Abandonné">Abandonné</option>
                    <option value="Terminé">Terminé</option>
                </select>
            </div>

            {/* Filtre par Urgence */}
            <div className="filter">
                <label>Urgence :</label>
                <input
                    type="checkbox"
                    checked={urgent}
                    onChange={() => setUrgent(!urgent)}
                />
                <span>Urgent</span>
            </div>

            {/* Filtre par Fait / Pas Fait */}
            <div className="filter">
                <label>Fait/Pas Fait :</label>
                <select value={isDone} onChange={(e) => setIsDone(e.target.value === "true" ? true : e.target.value === "false" ? false : null)}>
                    <option value="">Tous</option>
                    <option value="true">Fait</option>
                    <option value="false">Pas Fait</option>
                </select>
            </div>

            {/* Tri des tâches */}
            <div className="filter">
                <label>Tri :</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="">Sélectionner un critère</option>
                    <option value="dateCreation">Date création</option>
                    <option value="dateEcheance">Date échéance</option>
                    <option value="nom">Nom</option>
                </select>
            </div>

            <button onClick={applyFiltersAndSort}>Appliquer</button>
        </div>
    );
}

export default FilterSort;
