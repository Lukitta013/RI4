// const meuModulo = require('modulo')
import { Empresa, Cliente, Telefone, Endereco } from '../modulo/RI3.js'

const endereco = new Endereco ("RS", "Porto Alegre", "Av. Borges de Medeiros", "1200")
let cliente1 = new Cliente(("João Otávio Faria de Souza", "1010101010", endereco))

console.log(cliente1)