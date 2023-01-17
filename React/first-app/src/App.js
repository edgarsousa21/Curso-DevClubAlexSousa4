import React from 'react'
import People from './Assets/people.svg'
import Arrow from './Assets/arrow.svg'
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./styles";

function App() {

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>

        <Button>Cadastrar <img alt="seta" src={Arrow}></img></Button>
      </ContainerItens>

    </Container>
  );
}

export default App