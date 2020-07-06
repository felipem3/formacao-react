import React, { Fragment, Component } from 'react';

import Header from '../../components/Header/Header'
import DataTable from '../../components/DataTable/DataTable';
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
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Autores</h1>
          <DataTable dataRow={this.state.nomes} columns={[{ name: 'nome', display: 'Nome' }]} />
        </div>
      </Fragment >
    )
  }
}

export default Autores;

