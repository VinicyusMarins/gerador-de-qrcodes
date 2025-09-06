import chalk from "chalk";

const promptQRcode = [
    {
        name: "link",
        description: chalk.yellow("Insira o link desejado: "),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo de QRcode (1 - Imagem) ou (2 - Terminal) : "),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Insira um valor entre 1 e 2"),
        required: true,
    }
];

export default promptQRcode;