import bcrypt from 'bcrypt';
import criarConexao from './connection.js';

// Função para criar um usuário administrador
export async function criarUsuarioAdmin() {
    const con = await criarConexao(); // Garante a conexão antes de utilizá-la
    const nome = 'Marco';
    const email = 'admin@example.com';
    const senhaOriginal = 'lasanha';
    const hash = await bcrypt.hash(senhaOriginal, 10);

    let comando = `
        INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE nm_usuario = nm_usuario;
    `;

    await con.query(comando, [nome, email, hash]);
}

// Função para autenticar o usuário
export async function autenticarUsuario(email, senha) {
    const con = await criarConexao(); // Garante a conexão antes de utilizá-la
    let comando = `
        SELECT id_usuario, nm_usuario, ds_senha
        FROM tb_usuario
        WHERE ds_email = ?
    `;

    let [usuarios] = await con.query(comando, [email]);
    if (usuarios.length === 0) return null;

    const usuario = usuarios[0];
    const senhaValida = await bcrypt.compare(senha, usuario.ds_senha);
    
    if (!senhaValida) return null; // Retorna null se a senha for inválida
    
    // Retorna o usuário se a senha for válida
    return { id_usuario: usuario.id_usuario, nm_usuario: usuario.nm_usuario };
}

// Função para consultar todos os usuários
export async function consultarUsuarios() {
    const con = await criarConexao(); // Garante a conexão antes de utilizá-la
    const comando = `
        SELECT id_usuario, nm_usuario, ds_email
        FROM tb_usuario
    `;
    
    const [usuarios] = await con.query(comando);
    return usuarios; // Retorna a lista de usuários
}
