/*prompt configuration = this is how it works, it's name, description and which kind of user entry it accepts
(pattern). if a user entry something out of the pattern, then it throws an erros massage (massage)*/
import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1-QRCODE ou 2-PASSWORD)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bgBlack.italic("Escolha apenas entre 1 e 2"),
        required: true,
    },
]

//export prompt configuration to use in main.js
export default mainPrompt;