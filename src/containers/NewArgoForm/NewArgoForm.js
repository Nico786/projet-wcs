import React, { Component } from 'react';
import axios from 'axios';


class NewArgoForm extends Component {
    state = {
        name: ""
    }

    //à l'envoi du formulaire (au clic sur le bouton "envoyer"):
    handleValidation = () => {
        const argonaute = {
            argonauteName: this.state.name
        }

        //On va stocker en BDD chaque nouvel argonaute
        axios.post("https://jason-9f5e2-default-rtdb.europe-west1.firebasedatabase.app/argonautes.json", argonaute)
            .then(reponse => {
                console.log(reponse)
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        return (
            <>
                <h2>Ajouter un(e) Argonaute</h2>
                <form className="new-member-form">
                    <label htmlFor="name">Nom de l&apos;Argonaute</label>
                    <input id="name" name="name" type="text" placeholder="Charalampos" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
                    <button type="submit" onClick={this.handleValidation}>Envoyer</button>
                </form>
            </>
        )
    }
}

export default NewArgoForm;