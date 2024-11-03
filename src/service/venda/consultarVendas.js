import { consultarVendaPorId } from '../repository/vendaRepository.js';
import { validarVendaUnica } from '../validation/venda/vendaValidation.js'; // Importando a validação

export async function handleConsultarVendaPorId(id) {
    // Primeiro, consulte a venda pelo ID
    const registros = await consultarVendaPorId(id);
    
    // Valide se a venda é única ou se não foi encontrada
    validarVendaUnica(registros, { idCompra: id }); // Aqui você pode ajustar o segundo argumento conforme necessário

    // Retorne a venda, se encontrada
    return registros[0]; // Se não houver venda, isso resultará em undefined
}
