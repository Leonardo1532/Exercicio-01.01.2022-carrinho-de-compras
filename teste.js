//Você deve criar funções para:
//1. Cadastrar um produto. Um produto deve ter um 
//id, nome, preço e avaliação;


// deafio 1

var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0

var suporteNome = []
var suporteID = []
var suportePreco = []
var suporteAvalicoes = []
var indexSup = 0





function CadastrarProduto() {
    ids[index] = parseInt(prompt("Insira o ID do seu produto"))
    nomes[index] = prompt("Insira o nome do seu produto")
    precos[index] = parseInt(prompt("Insira o PREÇO do seu produto"))
    avaliacoes[index] = parseInt(prompt("Insira a avaliação do seu produto"))
    index++
}




/*desafio 2
Buscar um produto por id, ou seja, passar o id como parâmetro e exibir as
informações do produto correspondente;
*/

function BuscarProdutoID(buscaID) {

    for (var index2 = 0; index2 < ids.length; index2++) {
        if (buscaID == ids[index2]) {

            console.log("O ID do produto é: " + ids[index2])
            console.log("O nome é: " + nomes[index2])
            console.log("O preço é: ", precos[index2])
            console.log("A avaliação: ", avaliacoes[index2])

        }
    }
}

/*desafio 3
Buscar um produto pelo nome e retornar o id dele;
E.: Entrada = Mouse Médio
Retorno = 2
*/

function BuscarProdutoNome(buscaNome) {

    for (var index3 = 0; index3 < nomes.length; index3++) {

        if (buscaNome == nomes[index3]) {

            console.log("O nome do produto é: " + nomes[index3] + " O ID do produto é: " + ids[index3])

        }
    }
    if (buscaNome == nomes[index]) {
        nomes[index] = buscaNome
        console.log("O Nome do produto: ", buscaNome)
        console.log("O ID do produto: ", ids)

    }
}

//4. Exibir todos os produtos ordenados pelo id;

var menorID = 0


function OrdenarId() {

    suporteNome = []
    suporteID = []
    suportePreco = []
    suporteAvalicoes = []

    for (var index4 = 0; index4 < ids.length; index4++) {
        menorID = 1000000
        for (var index5 = 0; index5 < ids.length; index5++) {
            if (ids[index5] < menorID) {
                menorID = ids[index5]
            }
        }
        for (var contador = 0; contador < ids.length; contador++) {
            if (menorID == ids[contador]) {

                suporteID[index4] = ids[contador]
                suporteNome[index4] = nomes[contador]
                suportePreco[index4] = precos[contador]
                suporteAvalicoes[index4] = avaliacoes[contador]
                ids[contador] = 10000000
            }
        }
    }
    ids = suporteID
    nomes = suporteNome
    precos = suportePreco
    avaliacoes = suporteAvalicoes

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
    }
}


//Exibir os produtos ordenador pelo preço;

var menorPreco = 0


function OrdenarPreco() {

    suporteNome = []
    suporteID = []
    suportePreco = []
    suporteAvalicoes = []

    for (var contador = 0; contador < precos.length; contador++) {
        menorPreco = 100000
        for (var contador2 = 0; contador2 < precos.length; contador2++) {
            if (precos[contador2] < menorPreco) {
                menorPreco = precos[contador2]
            }
        }
        for (var contador3 = 0; contador3 < precos.length; contador3++) {
            if (menorPreco == precos[contador3]) {

                suportePreco[contador] = precos[contador3]
                suporteID[contador] = ids[contador3]
                suporteNome[contador] = nomes[contador3]
                suporteAvalicoes[contador] = avaliacoes[contador3]
                precos[contador3] = 10000000
            }
        }
    }

    console.log(suporteNome, suporteID, suporteAvalicoes, suportePreco)
    precos = suportePreco
    ids = suporteID
    nomes = suporteNome
    avaliacoes = suporteAvalicoes

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
    }
}

//6. Exibir os produtos pela ordem de avaliação;

var menorAvaliacao = 0

function OrdenarAvaliacao() {

    suporteNome = []
    suporteID = []
    suportePreco = []
    suporteAvalicoes = []

    for (var contador = 0; contador < avaliacoes.length; contador++) {
        menorAvaliacao = 100000

        for (var contador2 = 0; contador2 < avaliacoes.length; contador2++) {
            if (avaliacoes[contador2] < menorAvaliacao) {
                menorAvaliacao = avaliacoes[contador2]
            }
        }
        var contador4 = 0

        for (var contador3 = 0; contador3 < avaliacoes.length; contador3++) {
            if (menorAvaliacao == avaliacoes[contador3] && contador4 == 0) {

                suporteAvalicoes[contador] = avaliacoes[contador3]
                suporteID[contador] = ids[contador3]
                suporteNome[contador] = nomes[contador3]
                suportePreco[contador] = precos[contador3]
                avaliacoes[contador3] = 10000000
                contador4++
            }
        }
    }
    avaliacoes = suporteAvalicoes
    precos = suportePreco
    ids = suporteID
    nomes = suporteNome

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
    }
}

//7. Atualizar o preço de um produto, para isso deve receber o id do produto como parâmetro e o novo valor para atualizar;

var precoAtualizado

function AtualizarPreco(idAtualizar) {

    precoAtualizado = parseInt(prompt("Insira um novo valor para o produto"))
    for (var index = 0; index < ids.length; index++) {
        if (idAtualizar == ids[index]) {
            precos[index] = precoAtualizado
        }
    }

}

/* 8. Deletar um produto, não esqueça de organizar as informações para que não fique
espaços vazios;
Por fim, utilizando as funções criadas organize a execução do seu código, faça com que o
usuário possa escolher qual função executar e quando encerrar o programa.
*/


var nome

function DeletarProduto(nome) {

    suporteNome = []
    suporteID = []
    suportePreco = []
    suporteAvalicoes = []

    for (var contador5 = 0; contador5 < nomes.length; contador5++) {

        if (nome == nomes[contador5]) {
            nomes[contador5] = 0

        }
    }

    for (var contador6 = 0; contador6 < nomes.length; contador6++) {

        if (nomes[contador6] != 0) {

            suporteNome[indexSup] = nomes[contador6]

            suporteID[indexSup] = ids[contador6]

            suportePreco[indexSup] = precos[contador6]

            suporteAvalicoes[indexSup] = avaliacoes[contador6]

            indexSup++
        }
    }

    nomes = suporteNome
    ids = suporteID
    precos = suportePreco
    avaliacoes = suporteAvalicoes

}



var continuar = "s"

while (continuar == "s") {


    var opcao = prompt("Insira a opção que deseja executar: Cadastro(1) / Buscar por ID(2) / Buscar por nome(3) / Ordenar por ID(4) / Ordenar por PREÇO(5) / Ordenar por Avaliação(6) / Atualizar Produto(7) / Deletar um produto(8)")


    if (opcao == "1") {
        CadastrarProduto()
        console.log(ids, nomes, precos, avaliacoes)
        console.log("Produto cadastrado com sucesso")

    } else if (opcao == "2") {
        buscaID = prompt("Insira um ID para pesquisa")
        BuscarProdutoID(buscaID)

    } else if (opcao == "3") {
        buscaNome = prompt("Insira um nome para pesquisa")
        BuscarProdutoNome(buscaNome)

    } else if (opcao == "4") {
        OrdenarId()

    } else if (opcao == "5") {
        OrdenarPreco()

    } else if (opcao == "6") {
        OrdenarAvaliacao()

    } else if (opcao == "7") {
        var idAtualizar = prompt("Insira o ID do produto que queira atualizar")
        AtualizarPreco(idAtualizar)
        console.log("o novo valor deste produto é: " + precoAtualizado)

    } else if (opcao == "8") {
        nome = prompt("Insira o nome do produto que queira DELETAR")
        DeletarProduto(nome)
        console.log("Produto DELETADO com sucesso")
    }

    var desejaContinuar = prompt("Deseja continuar fazendo execuções?  s ou n")
    if (desejaContinuar != "s") {
        continuar = "n"
    }
}



/*
Agora devemos criar funções para um “carrinho de compras” para utilizar junto com as
funções anteriores, esse carrinho de compras deve guardar duas informações: o id do
produto e a quantidade deste produto ;

1. Crie uma função para adicionar produtos no carrinho, você deve passar o nome do
produto e a quantidade que deseja adicionar como parâmetro. Essa função deve
verificar primeiro se já existe esse produto no carrinho, se existir apenas adicione a
quantidade, se não adicione o produto e a quantidade;
*/


var precosCarrinho = []
var quantidadeCarrinho = []
var produtosCarrinho = []
var indexCarrinho = 0



function AdicionarProdutos(nomesCarrinho, quantidadeProdutos) {


    for (var contador = 0; contador < precos.length; contador++) {
        if (nomesCarrinho == nomes[contador]) {
            precosCarrinho[indexCarrinho] = precos[contador]
        }
    }

    if (nomesCarrinho == produtosCarrinho[indexCarrinho]) {

        quantidadeProdutos = quantidadeCarrinho[indexCarrinho] + quantidadeProdutos

    } else {
        produtosCarrinho[indexCarrinho] = nomesCarrinho
        quantidadeCarrinho[indexCarrinho] = quantidadeProdutos
    }

    indexCarrinho++

}

/*
2. Crie uma função para excluir um produto do carrinho, essa função deve receber o
nome do produto e a quantidade que deseja excluir como parâmetro. Se a
quantidade a se excluir for o total desse produto no carrinho o produto como um
todo deve ser removido;
*/

var quantidadeCarrinhoSup = []
var produtosCarrinhoSup = []
var indexSuporte = 0



function ExcluirProduto(nomeProdutoExcluido, quantidadeProdutoExcluido) {

    for (var contador = 0; contador < indexCarrinho; contador++) {

        if (nomeProdutoExcluido == produtosCarrinho[contador] && quantidadeProdutoExcluido == quantidadeCarrinho[contador]) {

            quantidadeCarrinho[contador] = 0

            produtosCarrinho[contador] = 0

        } else if (nomeProdutoExcluido == produtosCarrinho[contador]) {

            quantidadeCarrinho[contador] = quantidadeCarrinho[contador] - quantidadeProdutoExcluido

        }
    }

    for (var contador2 = 0; contador2 < indexCarrinho; contador2++) {

        if (produtosCarrinho[contador2] != 0) {

            produtosCarrinhoSup[indexSuporte] = produtosCarrinho[contador2]

            quantidadeCarrinhoSup[indexSuporte] = quantidadeCarrinho[contador2]

            indexSuporte++

        }
    }

    produtosCarrinho = produtosCarrinhoSup

    quantidadeCarrinho = quantidadeCarrinhoSup

}

//3. Crie uma função que retorne o valor total de todos os produtos no carrinho;

var valorTotal = 0

function RetornarValor() {
    for (var contador = 0; contador < indexCarrinho; contador++) {
        valorTotal = valorTotal + (precosCarrinho[contador] * quantidadeCarrinho[contador])

    }
    return valorTotal
}

/*
4. Crie uma função que exiba todos os produtos do carrinho e o valor total de todos os
produtos;
*/

function Exibir() {
    for (var contador = 0; contador < indexCarrinho; contador++) {
        console.log("Os produtos são: " + produtosCarrinho[contador])
        console.log("O valor total dos produtos é: " + RetornarValor())
    }
}



var retornar = "s"

while (retornar == "s") {

    var opcao = prompt("Insira a opção desejada! Adicionar um Produto no carrinho(1), Excluir um produto do carrinho(2), Exibir os produtos e o valor de todos os produtos do Carrinho(3)")

    if (opcao == 1) {
        var nomesCarrinho = prompt("Insira o nome do produto que deseja adicionar no carrinho")

        var quantidadeProdutos = parseInt(prompt("Insira a quantidade do produto que deseja adicionar no carrinho"))

        AdicionarProdutos(nomesCarrinho, quantidadeProdutos)

        console.log('Produto adicionado no carrinho')
        
    } else if (opcao == 2) {

        var nomeProdutoExcluido = prompt("Insira o nome do produto para ser excluido")

        var quantidadeProdutoExcluido = prompt("Insira a quantidade do produto para ser excluido")

        ExcluirProduto(nomeProdutoExcluido, quantidadeProdutoExcluido)

        console.log("Produto excluido do carrinho")
    } else if (opcao == 3) {
        Exibir()
    }

    var desejaContinuar = prompt("Deseja continuar fazendo execuções? s ou n")
    if (desejaContinuar != "s") {
        retornar = "n"
    }
}