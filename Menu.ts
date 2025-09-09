import leia = require("readline-sync");
import {Colors} from "./util/color";

let continuar: boolean = true;
let opcao: number;

do {
console.log(Colors.YELLOW + "************************************");
console.log(Colors.YELLOW +" Loja Online - Compra Facil");
console.log(Colors.YELLOW +"************************************");
console.log(Colors.YELLOW +"1 - Buscar Produtos");
console.log(Colors.YELLOW +"2 - Listar favoritos");
console.log(Colors.YELLOW +"3 - Meus Pedidos");
console.log(Colors.YELLOW +"4 - Adicionar Produto ao Carrinho");
console.log(Colors.YELLOW +"5 - Remover Produto do Carrinho");
console.log(Colors.YELLOW +"6 - Finalizar Compra");
console.log(Colors.YELLOW +"7 - Sair");
console.log(Colors.YELLOW +"************************************");
console.log(Colors.YELLOW +"Entre com a opção desejada: ");

opcao = leia.questionInt();

console.log(opcao);

} while (continuar);