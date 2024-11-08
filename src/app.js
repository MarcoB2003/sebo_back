// Importações
import './utils/global.js';
import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import adicionarRotas from './rotas.js';
import { criarUsuarioAdmin } from './repository/usuarioRepository.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());
adicionarRotas(servidor);

const PORTA = process.env.PORTA;

// Função para garantir que o usuário admin "Marco" seja criado ao iniciar o servidor
async function inicializarServidor() {
    try {
        await criarUsuarioAdmin(); // Cria o usuário administrador "Marco" se ele ainda não existir
        console.log("Usuário administrador pré-cadastrado com sucesso.");
    } catch (err) {
        console.error("Erro ao pré-cadastrar o administrador:", err);
    }
    
    servidor.listen(PORTA, () => console.log(`--> Api subiu na porta ${PORTA}`));
}

// Chamar a função de inicialização do servidor
inicializarServidor();
