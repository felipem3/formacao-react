import React, { Fragment, Component } from 'react';

import Header from '../../components/Header/Header'
import Tabela from '../../components/Tabela/Tabela';
import apiService from '../../utils/ApiService';
import Popup from '../../utils/Popup';

// import { Container } from './styles';

class Livros extends Component {
  constructor(props) {
    super(props)
    this.state = {
      livros: []
    }
  }

  componentDidMount() {
    apiService.ListaLivros()
      .then(res => {
        if (res.message === "success") {
          this.setState({ livros: [...this.state.livros, ...res.data] })
        }
      })
      .catch(err => Popup.exibeMensagem("error", `Erro na comunicação com api ${err}`))
  }

  render() {
    const campos = [{ titulo: 'Livros', dado: 'livro' }]
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Livros</h1>
          <Tabela dados={this.state.livros} campos={campos} />
        </div>
      </Fragment >
    );
  }
}

export default Livros;