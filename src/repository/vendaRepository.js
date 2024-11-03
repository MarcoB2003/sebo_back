import con from './connection.js';

// Função para salvar uma nova venda
export async function salvarVenda(venda) {
    const comando = `
    INSERT INTO tb_venda (nome_cliente, data_venda, nome_livro, quantidade, valor_venda)
    VALUES (?, ?, ?, ?, ?)
    `;
    const resposta = await con.query(comando, [venda.nome_cliente, venda.data_venda, venda.nome_livro, venda.quantidade, venda.valor_venda]);
    return resposta[0].insertId;
}

// Função para consultar todas as vendas
export async function consultarVendas() {
    const comando = `
    SELECT id_venda, nome_cliente, data_venda, nome_livro, quantidade, valor_venda
    FROM tb_venda
    `;
    const resposta = await con.query(comando);
    return resposta[0];
}

// Função para consultar uma venda específica pelo ID
export async function consultarVendaPorId(id) {
    const comando = `
    SELECT id_venda, nome_cliente, data_venda, nome_livro, quantidade, valor_venda
    FROM tb_venda
    WHERE id_venda = ?
    `;
    const resposta = await con.query(comando, [id]);
    return resposta[0];
}

// Função para atualizar uma venda pelo ID
export async function atualizarVenda(id, venda) {
    const comando = `
    UPDATE tb_venda
    SET nome_cliente = ?, data_venda = ?, nome_livro = ?, quantidade = ?, valor_venda = ?
    WHERE id_venda = ?
    `;
    const resposta = await con.query(comando, [venda.nome_cliente, venda.data_venda, venda.nome_livro, venda.quantidade, venda.valor_venda, id]);
    return resposta[0].affectedRows; // Retorna o número de linhas afetadas
}

// Função para deletar uma venda por ID
export async function deletarVenda(id) {
    const comando = `
    DELETE FROM tb_venda
    WHERE id_venda = ?
    `;
    const resposta = await con.query(comando, [id]);
    return resposta[0].affectedRows; // Retorna o número de linhas afetadas
}
