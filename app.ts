class Produto {
	ID: string;
	nome: string;
	tamanho: number;
    cor: string;
    qtd: number;
    localizacao: number;
	
	constructor(nome: string, tamanho: number, cor: string, qtd: number, localizacao: number){
		this.nome = nome;
		this.tamanho = tamanho;
		this.cor = cor;
		this.qtd = qtd;
		this.localizacao = localizacao;
	}
    getID(){
// retorna id do produto
    }
    getNome(){
//retorna o nome do produto
    }
    getTamanho(){
//retorna o tamanho do produto
    }
    getCor(){
//retorna a cor do produto
    }
    getQtd(){
//retorna a quantidade de produtos
    }
    getLocalizacao(){
//retorna a localização do produto
    }
}

class Estoque {
	listaProduto: string;
	qtdMinima: number;
	
	constructor(listaProduto: string, qtdMinima: number){
		this.listaProduto = listaProduto;
		this.qtdMinima = qtdMinima;
	}
    setProduto(produto){
//altera o valor/conteudo do atributo produto
    }
    setQtdMinima(){
//altera o valor/conteudo do atributo QtdMinima
    }
    getQtdMinima(){
//exibe o valor/conteudo do atributo produto
    }
}