import React, { useState } from "react";

function AddTask({ addTache, categories }) {
    const [intitule, setIntitule] = useState("");
    const [dateEcheance, setDateEcheance] = useState("");
    const [categorie, setCategorie] = useState("");
    const [urgent, setUrgent] = useState(false);
    const [etat, setEtat] = useState("Nouveau");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!intitule || !dateEcheance || !categorie) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        // Créer une nouvelle tâche
        const newTache = {
            intitulé: intitule,
            dateCreation: new Date().toISOString(),
            dateEcheance,
            etat,
            urgent,
            categorie,
        };

        // Appeler la fonction de rappel pour ajouter la tâche
        addTache(newTache);

        // Réinitialiser le formulaire
        setIntitule("");
        setDateEcheance("");
        setCategorie("");
        setUrgent(false);
        setEtat("Nouveau");
    };

    return (
        <div className="add-task">
            <h3>Ajouter une Tâche</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Intitulé :</label>
                    <input
                        type="text"
                        value={intitule}
                        onChange={(e) => setIntitule(e.target.value)}
                    />
                </div>
                <div>
                    <label>Date d'échéance :</label>
                    <input
                        type="date"
                        value={dateEcheance}
                        onChange={(e) => setDateEcheance(e.target.value)}
                    />
                </div>
                <div>
                    <label>Catégorie :</label>
                    <select
                        value={categorie}
                        onChange={(e) => setCategorie(e.target.value)}
                    >
                        <option value="">Sélectionnez une catégorie</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat.intitulé}>
                                {cat.intitulé}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Urgent :</label>
                    <input
                        type="checkbox"
                        checked={urgent}
                        onChange={() => setUrgent(!urgent)}
                    />
                </div>
                <div>
                    <label>État :</label>
                    <select
                        value={etat}
                        onChange={(e) => setEtat(e.target.value)}
                    >
                        <option value="Nouveau">Nouveau</option>
                        <option value="En cours">En cours</option>
                        <option value="Réussi">Réussi</option>
                        <option value="En attente">En attente</option>
                        <option value="Abandonné">Abandonné</option>
                        <option value="Terminé">Terminé</option>
                    </select>
                </div>
                <button type="submit">Ajouter la tâche</button>
            </form>
        </div>
    );
}

export default AddTask;
