import jwt from 'jsonwebtoken';

export function gerarToken(usuario) {
    const segredo = process.env.JWT_SECRET || 'segredo123'; // Use uma chave secreta adequada
    const token = jwt.sign(usuario, segredo, { expiresIn: '1h' });
    return token;
}
