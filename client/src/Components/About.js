import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbare />
      <div className="about">
        <h1 className="title">Maison Du Livre</h1>
        <p>
          Destinée aux universitaires et aux professionnels, MDL est un acteur
          potentiel sur le marché du livre en Tunisie. Elle présente son service
          de conseil, d’assistance et de soutien à sa clientèle son principal
          capital.
        </p>
        <h1 className="title">Notre édition</h1>
        <p>
          Engagée dans l’action culturelle citoyenne , Maison du livre ne cesse
          de développer le secteur de l’édition en répondant à une grande part
          du marché du livre en Tunisie, ce qui fait la diversité des fonds
          éditoriaux : Jeunesse, scolaire, littérature, actualités et livres
          professionnels.
        </p>
      </div>
    </div>
  );
};

export default About;
