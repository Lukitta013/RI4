class Cliente {
    #cpf
    constructor(nome,cpf,endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }
    // Métodos para nome
    get getCpf() { return this.#cpf }
    get getNomeMaiusculo() { return this.nome.toUpperCase() }
    get getNomeMinusculo() { return this.nome.toLowerCase() }
    get getEnderecoMinusculo() { return this.endereco.toUpperCase() }
    get getEnderecoMinusculo() { return this.endereco.toLowerCase() }
}
 
class Telefone {
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
    get getDdd() { return this.ddd }
    get getNumero() { return this.numero }
 
    get getTelefone() {
    return `(${this.ddd}) ${this.numero}`
    }
}
 
class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
    get getEstadoMaiusculo() { return this.estado.toUpperCase() }
    get getEstadoMinusculo() { return this.estado.toLowerCase() }
    get getCidadeMinusculo() { return this.cidade.toUpperCase() }
    get getCidadeMinusculo() { return this.cidade.toLowerCase() }
    get getRuaMinusculo() { return this.rua.toUpperCase() }
    get getRuaMinusculo() { return this.rua.toLowerCase() }
    get getNumeroMinusculo() { return this.numero.toUpperCase() }
    get getNumeroMinusculo() { return this.numero.toLowerCase() }
 
    get getEnderecoCompleto() {
        return `${this.rua}, ${this.numero} - ${this.cidade} / ${this.estado}`
    }
}
 
class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco, telefone){
        this.telefones = telefone
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
        this.telefonesEmpresas = new Set()
        this.empresas = new Set()
    }
    get getEnderecoMaiusculo() { return this.endereco.toUpperCase() }
    get getEnderecoMinusculo() { return this.endereco.toLowerCase() }
    get getNomeFantasiaMinusculo() { return this.nomeFantasia.toUpperCase() }
    get getNomeFantasiaMinusculo() { return this.nomeFantasia.toLowerCase() }
    get getRazaoSocialMinusculo() { return this.razaoSocial.toUpperCase() }
    get getRazaoSocialMinusculo() { return this.razaoSocial.toLowerCase() }

    detalhe() {
    let resultado = `Razão Social: ${this.razaoSocial}\n`
    resultado += `Nome fantasia: ${this.nomeFantasia}\n`
    resultado += "------------------\n"

    let listaOrdenada = Array.from(this.clientes)
        .sort((a, b) => a.nome.localeCompare(b.nome))

    listaOrdenada.forEach(cliente => {
        resultado += `Nome: ${cliente.nome}\n`
        resultado += `Estado: ${cliente.endereco.estado} `
        resultado += `Cidade: ${cliente.endereco.cidade} `
        resultado += `Rua: ${cliente.endereco.rua} `
        resultado += `Numero: ${cliente.endereco.numero}\n`

        cliente.telefones.forEach(tel => {
            resultado += `ddd: ${tel.ddd} numero: ${tel.numero}\n`
        })

        resultado += "\n"
    })

    return resultado
}

}
 
let cliente = new Cliente("João Otávio Faria de Souza", 1010101010, new Endereco("SP", "São José dos Campos", "Rua Monte Sinai", "20"))
cliente.telefones.add(new Telefone(12, "99999-9999"))


let cliente2 = new Cliente("Maria Fernanda da Silva", 2020202020, new Endereco("RJ", "Rio de Janeiro", "Rua das Laranjeiras", "150"))
cliente2.telefones.add(new Telefone(21, "98888-1111"))


let cliente3 = new Cliente("Carlos Eduardo Pereira", 3030303030, new Endereco("MG", "Belo Horizonte", "Av. Amazonas", "500"))
cliente3.telefones.add(new Telefone(31, "97777-2222"))


let cliente4 = new Cliente("Ana Beatriz Souza Lima", 4040404040, new Endereco("PR", "Curitiba", "Rua XV de Novembro", "85"))
cliente4.telefones.add(new Telefone(41, "96666-3333"))


let cliente5 = new Cliente("Felipe Augusto Martins", 5050505050, new Endereco("RS", "Porto Alegre", "Av. Borges de Medeiros", "1200"))
cliente5.telefones.add(new Telefone(51, "95555-4444"))

let empresa = new Empresa("Tigrão", "Tigrinho", "123456789", new Endereco("SP", "São Paulo", "Av. Paulista", "6424"))
empresa.telefonesEmpresas.add(new Telefone(14, "99342-3432"))
empresa.empresas.add(empresa)

empresa.clientes.add(cliente)
empresa.clientes.add(cliente2)
empresa.clientes.add(cliente3)
empresa.clientes.add(cliente4)
empresa.clientes.add(cliente5)

console.log(empresa.detalhe())

export { Empresa, Cliente, Telefone, Endereco }