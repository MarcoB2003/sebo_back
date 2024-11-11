import bcrypt from 'bcrypt';
import con from './connection.js';

export async function criarUsuarioAdmin() {
    const nome = 'admin@example.com';
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
    try {
        console.log('Tentando autenticar com email:', email);

        const comando = `
            SELECT id_usuario, nm_usuario, ds_senha
            FROM tb_usuario
            WHERE ds_email = ?
        `;
        const [usuarios] = await con.query(comando, [email]);

        console.log('Usuários encontrados:', usuarios);

        if (usuarios.length === 0) {
            console.log('Usuário não encontrado');
            return null;
        }

        const usuario = usuarios[0];
        const senhaValida = await bcrypt.compare(senha, usuario.ds_senha);

        if (!senhaValida) {
            console.log('Senha incorreta');
            return null;
        }
        
        return { id_usuario: usuario.id_usuario, nm_usuario: usuario.nm_usuario };
    } catch (err) {
        console.error('Erro ao autenticar usuário:', err);
        throw err;
    }
}

// Certifique-se de que esta função esteja corretamente exportada
export async function consultarUsuarios() {
    const comando = `
        SELECT id_usuario, nm_usuario, ds_email
        FROM tb_usuario
    `;
    const [usuarios] = await con.query(comando);
    return usuarios;
}
