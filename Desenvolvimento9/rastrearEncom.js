//Desenvolvimento 9
//Aluno: Alex Barros
//Data: 20/04/2023.

import {
    calcularPrecoPrazo,
    consultarCep,
    rastrearEncomendas,
} from 'correios-brasil';

const { rastrearEncomendas } = require('correios-brasil');

let codRastreio = ['BR456123123BR']; 

rastrearEncomendas(codRastreio).then(response => {
  console.log(response);
});