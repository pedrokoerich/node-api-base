import { Router } from 'express';
import { createUser, createUsers, getAllUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        name: 'Pedro Koerich 2',
        email: 'teste2@teste.com.br',
        posts: {
            create: {
                title: 'Meu primeiro post',
                subtitle: 'Conteúdo do meu primeiro post',
            }
        }
    })
    if (user) {
        res.status(201).json({ user })
    }else{
        res.status(500).json({ error: 'Failed to create user' });
    }

})

mainRouter.post('/users', async (req, res) => {
    const user = await createUsers([
        {name: 'Pedro Koerich', email: 'teste@teste.com.br'},
        {name: 'Fulano', email: 'fulano@teste.com.br'},
        {name: 'Ciclano', email: 'ciclano@teste.com.br'},
        {name: 'Beltrano', email: 'beltrano@teste.com.br'},
    ])
    res.json({ok: true})


})

mainRouter.get('/users', async (req, res) => {
    const users = await getAllUsers();
    res.json({ users });
});
