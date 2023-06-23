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
    getID(ID){
// retorna id do produto
    }
    getNome(nome){
//retorna o nome do produto
    }
    getTamanho(tamanho){
//retorna o tamanho do produto
    }
    getCor(cor){
//retorna a cor do produto
    }
    getQtd(qtd){
//retorna a quantidade de produtos
    }
    getLocalizacao(localizacao){
//retorna a localização do produto
    }
}