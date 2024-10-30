import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarFilmePorIdService from "../service/filme/consultarFilmePorIdService.js";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";
import deletarFilmeService from "../service/filme/deletarFilmeService.js";
import alterarCapaFilmeService from "../service/filme/alterarCapaFilmeService.js";


import multer from "multer";


import { Router } from "express";
const endpoints = Router();

endpoints.post('/filme', async (req, resp) => {
try {
    let filmeObj = req.body;
    let id = await salvarFilmeService(filmeObj);

resp.send({
    id: id
    })

}
catch (err) {
    logErro(err);
    resp.status(400).send(criarErro(err));
   }
})

endpoints.get('/filme', async (req, resp) => {
try {
    let nome = req.query.nome;
    let registros = await consultarFilmesService(nome);

    resp.send(registros);
}
catch (error) {
    logErro(err);
    resp.status(400).send(criarErro(err));
}

})

endpoints.get('/filme/:id', async (req, resp) => {
    try {
       let id = req.params.id;

       let filme = await consultarFilmePorIdService(id);

       resp.send(filme);
    }
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.put('/filme/:id', async (req, resp) => {
   try {

    //ler entradas
      let filmeObj = req.body;
      let id = req.params.id;

     //processamento  
     await alterarFilmeService(filmeObj, id);

     //saida reponse
     resp.status(204).send();
    }
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.delete('/filme/:id', async (req, resp) => {
    try {
         //entrada
         let id = req.params.id;     

         //processamento
         await deletarFilmeService(id);

        //saida
         resp.status(204).send();
    }
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

let uploadCapa = multer({ dest: './storage/capa' });

endpoints.put('/filme/:id/imagem', uploadCapa.single('imagem'), async (req, resp) => {
    try{
        //entrada
        let id = req.params.id;
        let caminhoImagem = req.file.path;

        //processamento (service)
        await alterarCapaFilmeService(id, caminhoImagem);
        //saida
        resp.status(204).send();
    }
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;