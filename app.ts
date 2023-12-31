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
    setProduto(){
//altera o valor/conteudo do atributo produto
    }
    setQtdMinima(){
//altera o valor/conteudo do atributo QtdMinima
    }
    getQtdMinima(){
//exibe o valor/conteudo do atributo produto
    }
    ordemCompra(){
//de acordo com o metodo "analisaTendencia", cria uma ordem de compra um certo produto
}
}

class Venda {
	produtoVendido: string;
	qtdVendida: number;
	dataVenda: Date;
	valorVenda: number;
	
	constructor(produtoVendido: string, qtdVendida: number, dataVenda: Date, valorVenda: number){
		this.produtoVendido = produtoVendido;
		this.qtdVendida = qtdVendida;
		this.dataVenda = dataVenda;
		this.valorVenda = valorVenda;
	}
    getProdutoVendido(){
//exibe o produto vendido
    }
    getQtdVendida(){
//exibe a quantidade de produtos vendidos
    }
    getDataVenda(){
//exibe da data no qual o produto foi vendido
    }
    getValorVenda(){
//exibe o valor no qual o produto foi vendido
    }
    calcLucro(){
//calcula o custo menos o valor da venda
    }
    analisaTentencia(){
//analisa os produtos mais vendidos e estipula uma possivel tendencia
    }
}
class Fornecedor {
	nomeFornecedor: string;
	infoContato: string;
	prazoEntrega: number;
	
	constructor(nomeFornecedor: string, infoContato: string, prazoEntrega: number){
		this.nomeFornecedor = nomeFornecedor;
		this.infoContato = infoContato;
		this.prazoEntrega = prazoEntrega;
	}
    getNomeFornecedor(){
//exibe o nome do fornecedor
    }
    getInfoContato(){
//exibe a informação de contato
    }
    getQtdMinima(){
//exibe o prazo de entrega
    }
}