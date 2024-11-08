export function validarCredenciais(credenciais) {
    if (!credenciais.email || !credenciais.email.includes('@')) {
        throw new Error('Email inválido.');
    }
    if (!credenciais.senha || credenciais.senha.length < 6) {
        throw new Error('Senha deve conter pelo menos 6 caracteres.');
    }
}
