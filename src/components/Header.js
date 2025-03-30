import React from 'react';

function Header({ vue, totalTaches, tachesNonTerminees }) {
    return (
        <header className="header">
            <h1>{vue === "taches" ? "Tâches" : "Catégories"}</h1>
            {vue === "taches" && (
                <div className="task-stats">
                    <p>Total des Tâches : {totalTaches}</p>
                    <p>Tâches non terminées : {tachesNonTerminees}</p>
                </div>
            )}
        </header>
    );
}

export default Header;
