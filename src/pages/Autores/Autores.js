import React, { Fragment, Component } from 'react';

import Header from '../../components/Header/Header'
import Tabela from '../../components/Tabela/Tabela';
import apiService from '../../utils/ApiService';
import Popup from '../../utils/Popup';
// import { Container } from './styles';

class Autores extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nomes: []
    }
  }

  componentDidMount() {
    apiService.ListaNomes()
      .then(res => {
        if (res.message === "success") {
          this.setState({ nomes: [...this.state.nomes, ...res.data] })
        }
      })
      .catch(err => Popup.exibeMensagem("error", `Erro na comunicação com api ${err}`))
  }
  render() {
    const campos = [{ titulo: 'Autores', dado: 'nome' }]

    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Autores</h1>
          <Tabela dados={this.state.nomes} campos={campos} />
        </div>
      </Fragment >
    )
  }
}

export default Autores;

