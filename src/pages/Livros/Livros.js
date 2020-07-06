import React, { Fragment, Component } from 'react';

import Header from '../../components/Header/Header'
import DataTable from '../../components/DataTable/DataTable';
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
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Livros</h1>
          <DataTable dataRow={this.state.livros} columns={[{ name: 'livro', display: 'Livro' }]} />
        </div>
      </Fragment >
    );
  }
}

export default Livros;