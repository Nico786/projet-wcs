import React, { Component } from 'react';
import axios from "axios";

class ArgonautesList extends Component {
  state = {
    argonautes: []
  }

  //Au chargement de la page: on effectue une requête pour récupérer les 3 argonautes déjà présents en BDD
  componentDidMount = () => {
    axios.get("https://jason-9f5e2-default-rtdb.europe-west1.firebasedatabase.app/argonautes.json")
      .then(reponse => {
        //console.log(reponse.data)
        let argonautes = Object.values(reponse.data) // on converti l'objet en array
        //console.log(argonautes)
        this.setState({ argonautes })

      })
      .catch(error => {
        console.log(error)
      })
  }

  //Affichage de la liste des argonautes:
  render() {
    return (
      <div className="container">
        <h2>Membres de l'équipage</h2>
        <section className="member-list">
          <div className="row mt-5">
            {this.state.argonautes.map((argonaute, indice) => {
              //console.log(argonaute)
              return (
                <div className="col-4 d-flex justify-content-center" key={indice}>
                  {argonaute.argonauteName}
                </div>
              )
            })}

          </div>
        </section>
      </div>
    )
  }
}

export default ArgonautesList;

