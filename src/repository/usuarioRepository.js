import bcrypt from 'bcrypt';
import con from './connection.js';

export async function criarUsuarioAdmin() {
    const nome = 'Marco';
    const email = 'admin@example.com';
    const senhaOriginal = 'lasanha';
    const hash = await bcrypt.hash(senhaOriginal, 10);

    const comando = `
        INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE nm_usuario = nm_usuario;
    `;
    await con.query(comando, [nome, email, hash]);
}

export async function autenticarUsuario(email, senha) {
    const comando = `
        SELECT id_usuario, nm_usuario, ds_senha
        FROM tb_usuario
        WHERE ds_email = ?
    `;

    const [usuarios] = await con.query(comando, [email]);
    if (usuarios.length === 0) return null;

    const usuario = usuarios[0];
    const senhaValida = await bcrypt.compare(senha, usuario.ds_senha);
    
    if (!senhaValida) return null;
    
    return { id_usuario: usuario.id_usuario, nm_usuario: usuario.nm_usuario };
}

// Função para consultar todos os usuários
export async function consultarUsuarios() {
    const comando = `
        SELECT id_usuario, nm_usuario, ds_email
        FROM tb_usuario
    `;
    
    const [usuarios] = await con.query(comando);
    return usuarios;
}
