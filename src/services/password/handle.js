async function handle() {
    let character = await permitedChar();
    let password = "";
    const passwordLength = process.env.PASSWORD_LENGTH;

    for(let i=0; i<passwordLength; i++){
        let index = Math.floor(Math.random() * character.length);
        password += character[index];
    }

    return character;
}

async function permitedChar() {
    let permited = [];
    if (process.env.UPPERCASE_LETTER === "true") {
        permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if(process.env.LOWERCASE_LETTER === "true"){
        permited.push(..."abcdefghijklmnopqrstuvwxyz");
    }
    if(process.env.NUMBER === "true"){
        permited.push(..."0123456789");
    }
    if(process.env.SPECIAL_CHAR === "true"){
        permited.push(..."!@#$%&[]");
    }

    return permited;
}

export default handle;