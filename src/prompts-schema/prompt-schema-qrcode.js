/*prompt configuration = this is how it works, it's name, description and which kind of user entry it accepts
(pattern). if a user entry something out of the pattern, then it throws an erros massage (massage)*/
import chalk from "chalk";


//you can make more than one prompt by adding new objects
const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QRCode (1-NORMAL ou 2-TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bgBlack.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
];

//exporting prompt configuration to use in create.js
export default promptQRCode;