import { salvarFilme, consultarFilmePorNome } from "../../repository/filmeRepository.js";
import { validarCamposObrigatoriosFilme, validarFilmeIgual } from "../../validation/filme/filmeValidation.js";


export default async function salvarFilmeService(filmeObj){
    //validacao de campos obrigatorios
    validarCamposObrigatoriosFilme(filmeObj);

    //buscar filmes com o mesmo nome
    let registros = await consultarFilmePorNome(filmeObj.nome);

    //validar se existe filme com mesmo nome
    validarFilmeIgual(registros);

    //logica de negócio
    let id = await salvarFilme(filmeObj);
    return id;
}