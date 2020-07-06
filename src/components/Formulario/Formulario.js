import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import FormValidator from '../../utils/FormValidator'
// import Popup from '../../utils/Popup'
import Toast from '../Toast/Toast'

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Informe o nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Informe o livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{ min: 0, max: 999999 }],
                validoQuando: true,
                mensagem: 'Informe um valor numérico para o preço'
            },
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido(),
            mensagem: {
                open: false,
                texto: '',
                tipo: 'success'
            }
        }

        this.state = this.stateInicial;
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state)

        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, livro, preco } = validacao
            const campos = [nome, livro, preco]

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid
            })
            console.log(camposInvalidos)
            //reduce navega no array e retorna um valor novo modificado
            const erros = camposInvalidos.reduce(
                (texto, campo) => `${texto} ${campo.message}. `,
                '')

            this.setState({
                mensagem: {
                    open: true,
                    texto: erros,
                    tipo: 'error'
                }
            })
        }

    }


    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }


    render() {
        const { nome, livro, preco, mensagem } = this.state;
        return (
            <>
                <Toast
                    open={mensagem.open}
                    handleClose={() => this.setState({ mensagem: { open: false } })}
                    severity={mensagem.tipo}
                >
                    {mensagem.texto}
                </Toast>
                <form>
                    <Grid container spacing={3} alignItems='center'>
                        <Grid item>
                            <TextField id="nome" label="Nome" name="nome" variant="outlined" value={nome} onChange={this.escutadorDeInput} />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="livro"
                                label="Livro"
                                name="livro"
                                variant="outlined"
                                value={livro}
                                onChange={this.escutadorDeInput}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="preco"
                                label="Preco"
                                name="preco"
                                variant="outlined"
                                value={preco}
                                onChange={this.escutadorDeInput}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={this.submitFormulario}
                                type="button"
                                variant="contained"
                                color="primary"
                            >
                                Salvar
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </>
        );
    }
}
export default Formulario