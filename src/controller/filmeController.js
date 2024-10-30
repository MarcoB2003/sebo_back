import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarFilmePorIdService from "../service/filme/consultarFilmePorIdService.js";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";
import deletarFilmeService from "../service/filme/deletarFilmeService.js";
import alterarCapaFilmeService from "../service/filme/alterarCapaFilmeService.js";
import { autenticarUsuario, criarUsuarioAdmin } from "../repository/usuarioRepository.js";

import multer from "multer";
import { Router } from "express";
const endpoints = Router();

endpoints.post('/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const usuario = await autenticarUsuario(email, senha);
        if (!usuario) {
            return resp.status(401).send({ erro: 'Credenciais inválidas' });
        }

        resp.send({ id: usuario.id_usuario, nome: usuario.nm_usuario });
    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: 'Erro interno ao autenticar o usuário' });
    }
});

endpoints.post('/filme', async (req, resp) => {
    try {
        let filmeObj = req.body;
        let id = await salvarFilmeService(filmeObj);

        resp.send({ id: id });
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao salvar o filme' });
    }
});

endpoints.get('/filme', async (req, resp) => {
    try {
        let nome = req.query.nome;
        let registros = await consultarFilmesService(nome);

        resp.send(registros);
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao consultar filmes' });
    }
});

endpoints.get('/filme/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let filme = await consultarFilmePorIdService(id);

        resp.send(filme);
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao consultar o filme' });
    }
});

endpoints.put('/filme/:id', async (req, resp) => {
    try {
        let filmeObj = req.body;
        let id = req.params.id;

        await alterarFilmeService(filmeObj, id);
        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao alterar o filme' });
    }
});

endpoints.delete('/filme/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        await deletarFilmeService(id);

        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao deletar o filme' });
    }
});

let uploadCapa = multer({ dest: './storage/capa' });

endpoints.put('/filme/:id/imagem', uploadCapa.single('imagem'), async (req, resp) => {
    try {
        let id = req.params.id;
        let caminhoImagem = req.file.path;

        await alterarCapaFilmeService(id, caminhoImagem);
        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao alterar a capa do filme' });
    }
});

export default endpoints;
export { autenticarUsuario, criarUsuarioAdmin };
