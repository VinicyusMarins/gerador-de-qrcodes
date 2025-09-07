import permitedChar from "./utils/permitedChar.js";

async function handle() {
    let character = await permitedChar();
    let password = "";
    const passwordLength = parseInt(process.env.PASSWORD_LENGTH);

    for(let i=0; i<passwordLength; i++){
        let index = Math.floor(Math.random() * character.length);
        password += character[index];
    }

    return password;
}

export default handle;