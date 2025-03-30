import React from 'react';

function TodoList({ taches, deleteTache }) {
    return (
        <div className="todo-list">
            {taches.map((tache, index) => (
                <div key={index} className={`todo-item ${tache.urgent ? "urgent" : ""} ${tache.etat === "Terminé" ? "done" : ""}`}>
                    <button
                        className="delete-btn"
                        onClick={() => deleteTache(index)}  // Appeler deleteTache en passant l'index
                    >
                        X
                    </button>
                    <h4>{tache.intitulé}</h4>
                    <p>{tache.dateEcheance}</p>
                    <p>{tache.categorie}</p>
                    <p>{tache.etat}</p>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
