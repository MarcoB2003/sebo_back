// src/controller/vendaController.js
import express from 'express';
import { 
    salvarVenda, 
    consultarVendas, 
    consultarVendaPorId, 
    deletarVenda,
    atualizarVenda // Nova função que você precisará criar
} from '../repository/vendaRepository.js'; // Certifique-se de que essa função exista

const router = express.Router();

// Endpoint para criar uma nova venda
router.post('/venda', async (req, res) => {
    console.log("POST /venda chamado com:", req.body); // Para depurar
    try {
        const venda = req.body;
        const id = await salvarVenda(venda);
        res.status(201).json({ id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar a venda' });
    }
});

// Endpoint para consultar todas as vendas
router.get('/venda', async (req, res) => {
    try {
        const vendas = await consultarVendas();
        res.status(200).json(vendas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao consultar as vendas' });
    }
});

// Endpoint para consultar uma venda específica pelo ID
router.get('/venda/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const venda = await consultarVendaPorId(id);
        if (venda) {
            res.status(200).json(venda);
        } else {
            res.status(404).json({ error: 'Venda não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao consultar a venda' });
    }
});

// Endpoint para atualizar uma venda pelo ID
router.put('/venda/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const vendaAtualizada = req.body;
        const resultado = await atualizarVenda(id, vendaAtualizada); // Chama a função para atualizar
        if (resultado) {
            res.status(200).json({ message: 'Venda atualizada com sucesso' });
        } else {
            res.status(404).json({ error: 'Venda não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a venda' });
    }
});

// Endpoint para deletar uma venda pelo ID
router.delete('/venda/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deletarVenda(id);
        if (result > 0) {
            res.status(204).send(); // No Content
        } else {
            res.status(404).json({ error: 'Venda não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar a venda' });
    }
});

export default router;
