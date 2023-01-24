import React from 'react'
import People from './Assets/people.svg'
import Arrow from './Assets/arrow.svg'
import Trash from './Assets/trash.svg'
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./styles";

function App() {
  const user = ({ id: Math.random(), name: "Alex", Age: 23 },
    { id: Math.random(), name: "Alex", Age: 23 })
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
        <ul>
          {user.map(user => (
            <User key={user.id}>
              <p>{user.name} - {user.age}</p>
              <button><img src={Trash} alt = "lata-de-lixo"/></button>
            </User>
          ))}
        </ul>

      </ContainerItens>

    </Container>
  );
}

export default App