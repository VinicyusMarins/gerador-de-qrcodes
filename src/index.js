import prompt from "prompt";
import chalk from "chalk";
import mainPrompt from "./prompts/prompt-main.js";
import createQRcode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js"

(async function main() {
    prompt.get(mainPrompt, async function(err, result) {
       if (result.select == 1) {
            console.log(chalk.green("Escolheu o QRcode."));
             await createQRcode();
       } 
       if (result.select == 2) {
            console.log(chalk.green("Escolheu Password."));
            await createPassword();
       }
    });
    prompt.start();
})();