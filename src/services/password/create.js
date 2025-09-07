import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    let password = await handle();
    
    console.log(chalk.green("Senha gerada com sucesso!"));

    console.log(chalk.yellow(password));
}

export default createPassword;