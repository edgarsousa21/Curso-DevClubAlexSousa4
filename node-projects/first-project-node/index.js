const express = require('express')
const uuid = require('uuid')
let cors = require('cors')

const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());

//Query Params => meusite.com/users?nome=alex&age=28 // FILTROS
//Route Params => /users/2 //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECIFICO
//Request Body => {"name":"alex", "age":}

/*app.get ('/users:id'busca qualquer valor e transforma como parametro*/

//GET           => Buscar informação o back-end
//POST          => Criar informação no back-end
//PUT/PATCH     => Alterar/Atualizar informação no back-end
//DELETE        => Deletar informação no back-end

//MIDLEWARE => Interceptador => Tem o poder de parar ou alterar dados da requisição.

const users = [];
const checkUserId = (request, response, next) => {
    const { id } = request.params
    const index = users.findIndex(user => user.id === id)
    if (index < 0) {
        return response.status(404).json({ error: "User Not Found" })
    }
    request.userIndex = index
    request.userId = id
    next()
};



app.get('/users', (request, response) => {
    return response.json(users)
})

app.post('/users', (request, response) => {
    const { name, age } = request.body;

    const user = { id: uuid.v4(), name, age };

    users.push(user);

    return response.status(201).json(user)
});

app.put('/users/:id', checkUserId, (request, response) => {
    const { name, age } = request.body;
    const index = request.userIndex;
    const id = request.userId;
    const updatedUser = { id, name, age };
    users[index] = updatedUser;

    return response.json(updatedUser);

});

app.delete('/users/:id', checkUserId, (request, response) => {
    const index = request.userIndex;
    users.splice(index, 1);

    return response.status(204).json();

});





app.listen(port, () => {
    console.log(`🚀Server Started on Port ${port}`)
})