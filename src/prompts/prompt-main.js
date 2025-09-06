import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.blue("Escolha a ferramenta (1 - QRcode) ou (2 - password)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha entre 1 e 2"),
        required: true
    }
];

export default mainPrompt;