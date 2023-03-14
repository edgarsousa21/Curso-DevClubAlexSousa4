import React, { useState, useRef } from 'react'
import axios from 'axios'
import People from './Assets/people.svg'
import Arrow from './Assets/arrow.svg'
import Trash from './Assets/trash.svg'
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User }
  from "./styles";

function App() {
  const [user, setUser] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  //primeira posição criar a variavel
  //segunda posição função auxiliar a atualizar a variavel


  async function addNewUser() {
    // TODA VEZ QUE FOR USAR O AWAIT, O ASYNC TEM QUE ESTAR JUNTO.
    const data = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    })
    console.log(data)
  }

  function deleteUser(userId) {
    const newUser = user.filter(user => user.id !== userId)
    setUser(newUser);
  }


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow}></img></Button>
        <ul>
          {user.map((user) => (
            <User key={user.id}>
              <p>{user.name} </p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

      </ContainerItens>

    </Container>
  );
}

export default App