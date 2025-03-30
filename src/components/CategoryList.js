import React, { useState } from "react";

function CategoryList({ categories, setCategories }) {
    const [newCategory, setNewCategory] = useState("");
    const [newColor, setNewColor] = useState("#000000");  // Couleur par défaut (noir)
    const [newEmoji, setNewEmoji] = useState("📅");

    const handleAddCategory = (e) => {
        e.preventDefault();

        if (newCategory.trim()) {
            const newCategoryObj = {
                intitulé: newCategory,
                couleur: newColor,  // Applique la couleur choisie
                emoji: newEmoji,
                actif: true
            };

            setCategories([...categories, newCategoryObj]);  // Ajouter la nouvelle catégorie avec la couleur
            setNewCategory("");
            setNewColor("#000000");
            setNewEmoji("📅");
        }
    };

    const handleDeleteCategory = (index) => {
        const updatedCategories = categories.filter((_, i) => i !== index);  // Supprimer la catégorie
        setCategories(updatedCategories);
    };

    return (
        <div className="category-list">
            <h3>Liste des Catégories</h3>

            {/* Affichage des catégories */}
            {categories.length === 0 ? (
                <p>Aucune catégorie disponible</p>
            ) : (
                categories.map((categorie, index) => (
                    <div key={index} className="category-item">
                        <span
                            style={{ color: categorie.couleur }} // Applique la couleur à l'emoji
                        >
                            {categorie.emoji}
                        </span>
                        <span>{categorie.intitulé}</span>
                        <button
                            onClick={() => handleDeleteCategory(index)}
                            className="delete-category-btn"
                        >
                            Supprimer
                        </button>
                    </div>
                ))
            )}

            {/* Formulaire d'ajout de catégorie (en bas de la liste) */}
            <form onSubmit={handleAddCategory} className="add-category-form">
                <div>
                    <label>Nom de la catégorie :</label>
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Couleur :</label>
                    <input
                        type="color"
                        value={newColor}
                        onChange={(e) => setNewColor(e.target.value)} // Met à jour la couleur choisie
                    />
                </div>
                <div>
                    <label>Emoji :</label>
                    <input
                        type="text"
                        value={newEmoji}
                        onChange={(e) => setNewEmoji(e.target.value)}
                    />
                </div>
                <button type="submit">Ajouter une catégorie</button>
            </form>
        </div>
    );
}

export default CategoryList;
