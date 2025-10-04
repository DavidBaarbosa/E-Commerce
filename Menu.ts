import readlinesync = require("readline-sync");
import { Colors } from ".src/util/colors";

export function main() {

let opcao: number;

while (true) {

console.log(Colors.YELLOW + "************************************");
console.log(Colors.YELLOW +" Loja Online - Compra Facil");
console.log(Colors.YELLOW +"************************************");
console.log(Colors.YELLOW +"1 - Cadastrar Produtos");
console.log(Colors.YELLOW +"2 - Listar Produtos");
console.log(Colors.YELLOW +"3 - Buscar Produtos");
console.log(Colors.YELLOW +"4 - Adicionar Produto ao Carrinho");
console.log(Colors.YELLOW +"5 - Remover Produto do Carrinho");
console.log(Colors.YELLOW +"6 - Sair");
console.log(Colors.YELLOW +"************************************");
console.log(Colors.YELLOW +"Entre com a opção desejada: ");

opcao = readlinesync.questionInt("");

if (opcao == 6) {
            console.log(colors.fg.cyanstrong,"\nCompra Fácil - tudo o que você precisa, sem complicação.");
            sobre();
            console.log(colors.reset, '')
            process.exit(7);

}

 switch (opcao) {
            case 1:
                console.log(colors.fg.cyanstrong,"\n\nCadastrar produto\n\n", colors.reset);

                break;
            case 2:
                console.log(colors.fg.cyanstrong,"\n\nListar produtos\n\n", colors.reset);

                break;
            case 3:
                console.log(colors.fg.cyanstrong,"\n\nBuscar Produtos\n\n", colors.reset);

                break;
            case 4:
                console.log( colors.fg.cyanstrong,"\n\nAdicionar Produtos\n\n" , colors.reset);

                break;
            case 5:
                console.log( colors.fg.cyanstrong,"\n\nRemover Produto\n\n" , colors.reset);

                break;

            default:
                console.log( colors.fg.cyanstrong,"\nOpção Inválida!\n" , colors.reset);

                break;
        }
    }

}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("David Barbosa  - dev.davidbarbosa@gmail.com");
    console.log("https://github.com/DavidBaarbosa");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();