import React from 'react';

function Footer({ toggleVue, vue, openModal }) {
    return (
        <footer>
            <button onClick={toggleVue}>
                {vue === "taches" ? "Basculer vers les Catégories" : "Basculer vers les Tâches"}
            </button>
        </footer>
    );
}

export default Footer;
