import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css';
import Tabela from '../../components/Tabela/Tabela';
import Formulario from '../../components/Formulario/Formulario';
import Header from '../../components/Header/Header'

import ApiService from '../../utils/ApiService'
import Popup from '../../utils/Popup';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      autores: [],
    }
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        if (res.message === "success") {
          this.setState({
            autores: [...this.state.autores, ...res.data]
          })
        }
      })
      .catch(err => Popup.exibeMensagem("error", `Erro na comunicação com api ${err}`))
  }

  removeAutor = id => {

    const { autores } = this.state;

    const autoresAtualizados = autores.filter(autor => {
      return autor.id !== id
    })
    ApiService.RemoveAutor(id)
      .then(res => {
        if (res.message === "deleted") {
          this.setState({ aturoes: [...autoresAtualizados] })
          Popup.exibeMensagem("success", "Autor Removido com Sucesso")
        }
      })
      .catch(err => Popup.exibeMensagem("error", `Erro na comunicação com api ${err}`))
  }

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if (res.message === "success") {
          this.setState({ autores: [...this.state.autores, autor] })
          Popup.exibeMensagem("success", `Autor ${autor.nome} Adicionado com Sucesso`)
        }
      })
      .catch(err => Popup.exibeMensagem("error", `Erro na comunicação com api ${err}`))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do código</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default Home;
