import { Router } from 'express';
import { validarCredenciais } from '../validation/usuario/usuarioValidation.js';
import { autenticarUsuario } from '../repository/usuarioRepository.js';
import { gerarToken } from '../utils/jwt.js';

const endpoints = Router();

endpoints.post('/login', async (req, resp) => {
    try {
        const credenciais = req.body;

        validarCredenciais(credenciais);

        const usuario = await autenticarUsuario(credenciais.email, credenciais.senha);
        
        if (!usuario) {
            return resp.status(401).send({ erro: 'Credenciais inválidas' });
        }

        const token = gerarToken({ id: usuario.id_usuario, nome: usuario.nm_usuario });

        resp.send({ token });
    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: 'Erro interno ao autenticar o usuário' });
    }
});

export default endpoints;
