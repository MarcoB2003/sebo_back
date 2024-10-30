// Importações
import bcrypt from 'bcrypt';
import con from './connection.js';

// Função para criar um usuário administrador
export async function criarUsuarioAdmin() {
    const nome = 'Marco';
    const email = 'admin@example.com';
    const senhaOriginal = 'lasanha';
    const hash = await bcrypt.hash(senhaOriginal, 10); // Criptografar a senha

    let comando = `
        INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE nm_usuario = nm_usuario;
    `;

    await con.query(comando, [nome, email, hash]);
}

// Função para autenticar o usuário
export async function autenticarUsuario(email, senha) {
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
