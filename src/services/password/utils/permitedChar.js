async function permitedChar() {
    const chars = [];
    if (process.env.UPPERCASE_LETTER === "true") {
        chars.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (process.env.LOWERCASE_LETTER === "true") {
        chars.push(...'abcdefghijklmnopqrstuvwxyz');
    }
    if (process.env.NUMBER === "true") {
      chars.push(...'0123456789');
    }
    if (process.env.SPECIAL_CHAR === "true") {
      chars.push(...'!@#$%&*()_-+=[]{}?/');
    }

  return chars;
}

export default permitedChar;