import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../../components/Header/Header'
// import { Container } from './styles';

const useEstilos = makeStyles({
  titulo: {
    textAlign: "center",
    color: 'blue'
  }
})

function Sobre() {
  const classes = useEstilos()

  return (
    <Fragment>
      <Header />
      <Container maxWidth="sm">
        {/*         aparencia de h1  |  codigo h2*/}
        <Typography className={classes.titulo} variant="h1" component="h2">Sobre</Typography>
        <Typography variant="body1" component="p">
          A casa do código é uma editora que desenvolve e edita livros em diversos formatos
        </Typography>
      </Container>
    </Fragment>
  );
}

export default Sobre;