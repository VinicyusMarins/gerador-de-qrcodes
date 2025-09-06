import chalk from "chalk";
import qr from "qrcode-terminal";

async function handle(err, result) {
    if(err){
        console.log(chalk.red.italic("Erro na aplicação"))
        return;
    }

    const isSmall = result.type == 2;
    
    qr.generate(result.link,{small: isSmall},(qrcode)=>{
        console.log(chalk.green("QRcode gerado com sucesso!"));
        console.log(qrcode);
    })
}

export default handle;