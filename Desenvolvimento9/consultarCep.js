//Desenvolvimento 9
//Aluno: Alex Barros
//Data: 20/04/2023.

import {
    calcularPrecoPrazo,
    consultarCep,
    rastrearEncomendas,
} from 'correios-brasil';

const { consultarCep } = require('correios-brasil');

const cep = '55000000'; 
consultarCep(cep).then(response => {
  console.log(response);
});