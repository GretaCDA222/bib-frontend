import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import "./newItem.css";

const NewItem = (props) => {

    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        titre: "",
        annee: "",
        auteur: "",
        imageUrl: ""
    })
    const history = useHistory();

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
        handleValidation(e.target.name)
    }

    const handleValidation = (itemToControl) => {
        let errors = {};
        let isFormValid = true;
     
        if (!itemToControl || itemToControl === "titre") {
          if (!form.titre) {
            isFormValid = false;
            errors.titre = "Le titre doit être renseigné!";
          } else if (typeof form.titre !== undefined) {
            if (!form.titre.match(/^[0-9a-zA-Z\- ]+$/)) {
              isFormValid = false;
              errors.titre = "Ne doit contenir que des lettres ou des chiffres!";
            }
          }
        }
     
        if (!itemToControl || itemToControl === "annee") {
          if (!form.annee) {
            isFormValid = false;
            errors.annee = "L'année doit être renseignée!";
          } else if (typeof form.annee !== undefined) {
            if (!form.annee.match(/^[0-9]+$/)) {
              isFormValid = false;
              errors.annee = "Ne doit contenir que des chiffres sur 4 caractères!";
            }
          }
        }
     
        if (!itemToControl || itemToControl === "auteur") {
          if (!form.auteur) {
            isFormValid = false;
            errors.auteur = "L'auteur doit être renseigné!";
          } else if (typeof form.auteur !== undefined) {
            if (!form.auteur.match(/^[a-zA-Z\- ]+$/)) {
              isFormValid = false;
              errors.auteur = "Ne doit contenir que des lettres!";
            }
          }
        }
     
        // if (!itemToControl || itemToControl === "imageUrl") {
        //   if (!form.imageUrl) {
        //     isFormValid = false;
        //     errors.imageUrl = "L'url de l'image doit être renseignée!";
        //   }
        //   else if (typeof form.imageUrl !== undefined) {
        //     if (!form.imageUrl.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)) {
        //       isFormValid = false;
        //       errors.imageUrl = "Ne doit contenir que des lettres ou des chiffres!";
        //     }
        //   }
        // }
     
        setErrors(errors);
        return isFormValid;
      };

    const itemSubmitHandler = async (event) => {
        event.preventDefault()
        console.log({form})
        const addData = async () => {
          try {
            await fetch(`http://localhost:5000/api/${props.route}`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                auteur: form.auteur,
                annee: form.annee,
                titre: form.titre,
                imageUrl: form.imageUrl,
              })
            })
          } catch (error) {
            console.log(error.message)
          }
          history.push(`/${props.route}`)
        }
        addData();
    }

    

  return (
    <div className="div-tag">
      <form className="form-tag" onSubmit={itemSubmitHandler}>
        <label htmlFor="titre" className="label-tag">
          Titre: <span>*</span>
        </label>
        <input
          type="text"
          id="titre"
          name="titre"
          className="input-tag"
          placeholder="Renseigner le titre"
          onChange={(e) => handleChange(e)}
        />
        <span className="error-tag">{errors.titre}</span>

        <label htmlFor="annee" className="label-tag">
          Année: <span>*</span>
        </label>
        <input
          type="text"
          id="annee"
          name="annee"
          className="input-tag"
          placeholder="Renseigner l'année"
          onChange={(e) => handleChange(e)}
        />
        <span className="error-tag">{errors.annee}</span>

        <label htmlFor="auteur" className="label-tag">
          Auteur: <span>*</span>
        </label>
        <input
          type="text"
          id="auteur"
          name="auteur"
          className="input-tag"
          placeholder="Renseigner l'auteur"
          onChange={(e) => handleChange(e)}
        />
        <span className="error-tag">{errors.auteur}</span>

        <label htmlFor="imageUrl" className="label-tag">
          URL de l'image: <span>*</span>
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="input-tag"
          placeholder="Renseigner l'url de l'image"
          onChange={(e) => handleChange(e)}
        />
        {/* <span className="error-tag">{errors.imageUrl}</span> */}

        <button type="submit" className="button-tag">
          Valider
        </button>
      </form>
    </div>
  );
};

export default NewItem;
